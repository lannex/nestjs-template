import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { ConfigModule } from './config.module';
import {
  appName,
  dbHost,
  dbPassword,
  dbPort,
  dbUsername,
  isProduction,
} from '../values';

export const OrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const { database } = configService.get(`${appName}.db`);

    return {
      type: 'mysql',
      host: dbHost,
      port: Number(dbPort),
      username: dbUsername,
      password: dbPassword,
      database,
      entities: [],
      synchronize: !isProduction,
      logging: !isProduction,
    };
  },
});
