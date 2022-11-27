import { Module } from '@nestjs/common';

import { RedisOutAdapter } from './infra/redis.out.adapter';
import { CacheOutPort } from './app/port/cache.out.port';

export const cacheProvider = {
  provide: CacheOutPort,
  useClass: RedisOutAdapter,
};

@Module({
  imports: [],
  providers: [RedisOutAdapter],
  exports: [RedisOutAdapter],
})
export class CacheModule {}
