import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { GetHealthQuery } from './get-health.query';

@Controller('healthcheck')
export class GetHealthcheckController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  public async getHealth() {
    const query = new GetHealthQuery();
    return this.queryBus.execute(query);
  }
}
