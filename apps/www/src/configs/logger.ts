import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';

const { combine, timestamp, ms, errors, colorize } = winston.format;

export const createLogger = (appName: string) =>
  WinstonModule.createLogger({
    transports: [
      new winston.transports.Console({
        format: combine(
          errors({ stack: true }),
          timestamp(),
          ms(),
          nestWinstonModuleUtilities.format.nestLike(appName),
          colorize(),
        ),
      }),
    ],
  });
