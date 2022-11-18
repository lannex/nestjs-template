import { CqrsModule } from '@nestjs/cqrs';

import { MapperModule } from '@libs/shared-configs';

import { ConfigModule } from './config.module';
import { OrmModule } from './orm.module';

export const configsModule = [
  ConfigModule,
  OrmModule,
  MapperModule,
  CqrsModule,
];
