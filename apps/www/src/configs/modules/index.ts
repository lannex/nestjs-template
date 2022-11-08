import { CqrsModule } from '@nestjs/cqrs';

import { ConfigModule } from './config.module';
import { OrmModule } from './orm.module';

export default [ConfigModule, OrmModule, CqrsModule];
