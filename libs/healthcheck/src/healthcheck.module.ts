import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { HealthcheckController } from './healthcheck.controller';
import { GetHealthQueryHandler } from './application/queries/get-health/get-health.query.handler';

@Module({
  imports: [CqrsModule],
  controllers: [HealthcheckController],
  providers: [GetHealthQueryHandler],
})
export class HealthcheckModule {}
