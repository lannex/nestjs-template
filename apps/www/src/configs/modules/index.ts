import { CqrsModule } from '@nestjs/cqrs';

import { MapperModule, RedisModule } from '@nestjs-template/shared-configs';

import { ConfigModule } from './config/config.module';
import { OrmModule } from './orm/orm.module';

export const configsModule = [
  ConfigModule,
  OrmModule,
  MapperModule,
  RedisModule(ConfigModule),
  CqrsModule,
];
