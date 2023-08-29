import { ArgumentsHost, Catch, HttpException, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  constructor() {
    super();
  }

  catch(exception: HttpException | unknown, host: ArgumentsHost): void {
    const exc =
      exception instanceof HttpException ? { ...exception } : exception;
    this.logger.error(exc);

    super.catch(exception, host);
  }
}
