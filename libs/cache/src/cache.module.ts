import { Module } from '@nestjs/common';

import { RedisOutAdapter } from './redis.out.adapter';
import { CacheOutPort } from './cache.out.port';

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
