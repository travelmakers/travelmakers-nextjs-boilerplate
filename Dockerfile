# https://github.com/vercel/next.js/tree/canary/examples/with-docker
FROM node:16.15.0-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# libc6-compat이 필요한 이유를 이해하려면 https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine을 확인하세요.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  # if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  if [ -f yarn.lock ]; then yarn install --immutable --immutable-cache --check-cache; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js는 일반적인 사용에 대한 완전히 익명의 원격 측정 데이터를 수집합니다.
# 여기에서 자세히 알아보세요: https://nextjs.org/telemetry
# 빌드 중에 원격 측정을 비활성화하려는 경우 다음 줄의 주석을 제거하십시오.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# npm을 사용하는 경우 위의 주석을 제거하고 대신 아래를 사용하십시오.
# RUN npm run build


# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# 런타임 중에 원격 측정을 비활성화하려는 경우 다음 줄의 주석을 해제하십시오.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# 출력 추적을 자동으로 활용하여 이미지 크기 줄이기
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]