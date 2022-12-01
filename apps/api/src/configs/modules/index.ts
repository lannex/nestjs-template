import { CqrsModule } from '@nestjs/cqrs';

import { MapperModule } from '@nestjs-template/shared-configs';

import { ConfigModule } from './config.module';
import { OrmModule } from './orm.module';
import { CacheModule } from './cache.module';

export const configsModule = [
  ConfigModule,
  OrmModule,
  CacheModule,
  MapperModule,
  CqrsModule,
];
