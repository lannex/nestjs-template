import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { ConfigModule } from './config.module';
import {
  dbDatabase,
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
    return {
      type: 'mysql',
      host: dbHost,
      port: Number(dbPort),
      username: dbUsername,
      password: dbPassword,
      database: dbDatabase,
      entities: [],
      synchronize: !isProduction,
      logging: ['error'],
    };
  },
});
