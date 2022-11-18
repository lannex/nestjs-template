import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { ConfigModule } from './config.module';
import { appName, isProduction } from '../values';

export const OrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    const { host, port, username, password, database } = configService.get(
      `${appName}.db`,
    );

    return {
      type: 'mysql',
      host,
      port: Number(port),
      username,
      password,
      database,
      entities: [`${__dirname}/**/*.entity.ts`],
      synchronize: !isProduction,
    };
  },
  inject: [ConfigService],
});
