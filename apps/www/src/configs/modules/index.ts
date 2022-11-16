import { CqrsModule } from '@nestjs/cqrs';

import { MapperModule } from '@nestjs-template/shared-configs';

import { ConfigModule } from './config.module';
import { OrmModule } from './orm.module';

export default [ConfigModule, OrmModule, MapperModule, CqrsModule];
