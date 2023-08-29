import { SentryInterceptor } from '@ntegral/nestjs-sentry';
import { HttpException, NestInterceptor } from '@nestjs/common';

export const sentryInterceptor = (): NestInterceptor =>
  new SentryInterceptor({
    filters: [
      {
        type: HttpException,
        filter: (exception: HttpException): boolean =>
          exception.getStatus() < 500,
      },
    ],
  });
