import { Module } from '@nestjs/common';

import { HealthcheckModule } from '@nestjs-template/healthcheck';
import { CacheModule } from '@nestjs-template/cache';

import { providers } from './app.providers';
import { configsModule } from './configs/modules';

@Module({
  imports: [...configsModule, HealthcheckModule, CacheModule],
  providers,
})
export class AppModule {}
