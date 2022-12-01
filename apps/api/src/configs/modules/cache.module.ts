import { ConfigService } from '@nestjs/config';
import { RedisModule, RedisModuleOptions } from '@liaoliaots/nestjs-redis';

import { ConfigModule } from './config.module';
import { redisHost, redisPassword, redisPort } from '../values';

export const CacheModule = RedisModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<RedisModuleOptions> => {
    return {
      config: {
        host: redisHost,
        port: Number(redisPort),
        password: redisPassword,
      },
    };
  },
});
