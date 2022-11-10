import { CqrsModule } from '@nestjs/cqrs';

import { ConfigModule } from './config.module';
import { MapperModule } from './mapper.module';
import { OrmModule } from './orm.module';

export default [ConfigModule, OrmModule, MapperModule, CqrsModule];
