import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { WinstonAdaptor } from 'typeorm-logger-adaptor/logger/winston';
import winston from 'winston';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { ConfigModule } from '../config.module';
import { getOptions } from '../../logger';
import {
  dbDatabase,
  dbHost,
  dbPassword,
  dbPort,
  dbUsername,
  isLocal,
} from '../../values';
import { entities } from './entities';

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
      entities,
      timezone: '+09:00', // NOTE: 한국 시간
      // migrationsRun: isLocal,
      // synchronize: isLocal,
      namingStrategy: new SnakeNamingStrategy(),
      logger: new WinstonAdaptor(
        winston.createLogger(getOptions('api')),
        'all',
      ),
    };
  },

  async dataSourceFactory(options): Promise<DataSource> {
    if (!options) {
      throw new Error('Invalid options passed');
    }
    return addTransactionalDataSource(new DataSource(options));
  },
});
