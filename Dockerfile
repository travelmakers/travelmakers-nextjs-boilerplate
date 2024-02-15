FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY .yarn ./.yarn
COPY .pnp.cjs .yarnrc.yml package.json yarn.lock* ./

RUN yarn install --immutable

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/.yarn ./.yarn
COPY --from=deps /app/.pnp.cjs ./pnp.cjs
#COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advaznced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.pnp.cjs ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN rm -rf ./.yarn/cache
COPY --from=builder --chown=nextjs:nodejs /app/.yarn ./.yarn/

USER nextjs

EXPOSE 3000

ENV PORT 3000

 CMD ["node", "server.js"]
#CMD ["node", "-r", "./.pnp.cjs", "server.js"]