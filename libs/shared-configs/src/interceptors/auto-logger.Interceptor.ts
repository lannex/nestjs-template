import {
  CallHandler,
  ExecutionContext,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

class AutoLoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger(AutoLoggerInterceptor.name);

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const { method, url, query, body } = req;
    const reqLogs = {
      method,
      url,
      query,
      // body,
    };

    this.logger.log({
      message: 'Incoming request',
      req: reqLogs,
    });

    return next.handle().pipe(
      map((data) => {
        // NOTE: res는 처리하지 않음
        return data;
      }),
    );
  }
}

export const autoLoggerInterceptor = (): NestInterceptor =>
  new AutoLoggerInterceptor();
