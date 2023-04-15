import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN: string | undefined =
  process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://examplePublicKey@o0.ingest.sentry.io/0',
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  // replaysSessionSampleRate: 0.1,
  // // If the entire session is not sampled, use the below sample rate to sample
  // // sessions when an error occurs.
  // replaysOnErrorSampleRate: 1.0,

  // integrations: [new Sentry.Replay()],
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
