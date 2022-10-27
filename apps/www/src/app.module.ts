import { Module } from '@nestjs/common';

import { ConfigModule } from './configs/config.module';
import { OrmModule } from './configs/orm.module';

@Module({
  imports: [ConfigModule, OrmModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
