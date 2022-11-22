import {
  RedisModule as rm,
  RedisModuleOptions,
} from '@liaoliaots/nestjs-redis';
import { ConfigService } from '@nestjs/config';
import { DynamicModule } from '@nestjs/common';

export const RedisModule = (configModule: DynamicModule) =>
  rm.forRootAsync({
    imports: [configModule],
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
