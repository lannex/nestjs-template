import { SentryModule as sm } from '@ntegral/nestjs-sentry';

import { isLocal, nodeEnv, sentryDsn } from '../values';

export const SentryModule = sm.forRoot({
  enabled: !isLocal,
  dsn: sentryDsn,
  debug: true,
  environment: nodeEnv,
  // release: 'some_release' | null, // must create a release in sentry.io dashboard
  logLevels: ['error', 'warn', 'debug'],
});
