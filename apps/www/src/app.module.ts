import {
  ClassSerializerInterceptor,
  Module,
  Provider,
  ValidationPipe,
} from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';

import { HealthcheckModule } from '@nestjs-template/healthcheck';

import { ConfigModule } from './configs/config.module';
import { OrmModule } from './configs/orm.module';

const configs = [ConfigModule, OrmModule, CqrsModule];

const modules = [HealthcheckModule];

const providers: Provider[] = [
  {
    provide: APP_PIPE,
    useValue: new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
  },
  // {
  //   provide: APP_FILTER,
  //   useClass: AllExceptionsFilter,
  // },
];

@Module({
  imports: [...configs, ...modules],
  controllers: [],
  providers,
})
export class AppModule {}
