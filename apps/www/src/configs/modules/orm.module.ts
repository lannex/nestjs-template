import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { ConfigModule } from './config.module';
import { appName, isProduction } from '../index';

export const OrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    return {
      type: 'mysql',
      host: configService.get(`${appName}.db.host`),
      port: Number(configService.get(`${appName}.db.port`)),
      username: configService.get(`${appName}.db.username`),
      password: configService.get(`${appName}.db.password`),
      database: configService.get(`${appName}.db.database`),
      entities: [`${__dirname}/**/*.entity.ts`],
      synchronize: !isProduction,
    };
  },
  inject: [ConfigService],
});
