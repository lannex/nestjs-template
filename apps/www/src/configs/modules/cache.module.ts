import { ConfigService } from '@nestjs/config';
import { RedisModule, RedisModuleOptions } from '@liaoliaots/nestjs-redis';

import { ConfigModule } from './config.module';

export const CacheModule = RedisModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<RedisModuleOptions> => {
    const { host, port, password } = configService.get(`shared.redis`);

    return {
      config: {
        host,
        port,
        password,
      },
    };
  },
});
