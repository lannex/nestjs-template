import Redis from 'ioredis';
import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@liaoliaots/nestjs-redis';

import { CacheOutPort } from '../app/port/cache.out.port';

@Injectable()
export class RedisOutAdapter implements CacheOutPort {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  get(key: string) {
    return this.redis.get(key);
  }

  set(key: string, value: string) {
    return this.redis.set(key, value);
  }
}
