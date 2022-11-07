import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { GetHealthQuery } from './get-health.query';

@QueryHandler(GetHealthQuery)
export class GetHealthQueryHandler implements IQueryHandler<GetHealthQuery> {
  public async execute(query: GetHealthQuery): Promise<string> {
    return '';
  }
}
