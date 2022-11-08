import {
  ClassSerializerInterceptor,
  Module,
  Provider,
  ValidationPipe,
} from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import { HealthcheckModule } from '@nestjs-template/healthcheck';

import configs from './configs/modules';

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
