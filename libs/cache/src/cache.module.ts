import { Module } from '@nestjs/common';

import { RedisOutAdapter } from './infrastructure/redis.out.adapter';
import { CacheOutPort } from './application/cache.out.port';

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
