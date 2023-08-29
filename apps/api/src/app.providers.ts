import { ClassSerializerInterceptor, Provider } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import {
  AllExceptionsFilter,
  autoLoggerInterceptor,
  sentryInterceptor,
  validationPipe,
} from '@nestjs-template/shared-configs';

export const providers: Provider[] = [
  {
    provide: APP_PIPE,
    useValue: validationPipe,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
  },
  {
    provide: APP_FILTER,
    useClass: AllExceptionsFilter,
  },
  {
    provide: APP_INTERCEPTOR,
    useFactory: sentryInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useFactory: autoLoggerInterceptor,
  },
];
