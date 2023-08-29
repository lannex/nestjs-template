import { MapperModule } from '@nestjs-template/shared-configs';

import { ConfigModule } from './config.module';
import { OrmModule } from './orm/orm.module';
import { CacheModule } from './cache.module';
import { SentryModule } from './sentry.module';

export const configModules = [
  ConfigModule,
  OrmModule,
  CacheModule,
  MapperModule,
  SentryModule,
];
