import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { GetHealthcheckController } from './queries/get-health/get-health.controller';
import { GetHealthQueryHandler } from './queries/get-health/get-health.query-handler';

@Module({
  imports: [CqrsModule],
  controllers: [GetHealthcheckController],
  providers: [GetHealthQueryHandler],
})
export class HealthcheckModule {}
