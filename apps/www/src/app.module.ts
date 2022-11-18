import { Module } from '@nestjs/common';

import { HealthcheckModule } from '@libs/healthcheck';

import { providers } from './app.providers';
import { configsModule } from './configs/modules';

@Module({
  imports: [...configsModule, HealthcheckModule],
  providers,
})
export class AppModule {}
