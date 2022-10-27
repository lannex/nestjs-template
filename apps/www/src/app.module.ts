import {
  ClassSerializerInterceptor,
  Module,
  ValidationPipe,
} from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import { ConfigModule } from './configs/config.module';
import { OrmModule } from './configs/orm.module';

const providers = [
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
  imports: [ConfigModule, OrmModule],
  controllers: [],
  providers,
})
export class AppModule {}
