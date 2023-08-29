import { LoggerService } from '@nestjs/common';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';

import { isLocal } from './values';

const { combine, timestamp, ms, errors, colorize, json } = winston.format;

export const getOptions = (appName: string): Partial<winston.Logger> => {
  const formatsForEnv = isLocal ? [colorize()] : [json()];
  return {
    transports: [
      new winston.transports.Console({
        format: combine(
          errors({ stack: true }),
          timestamp(),
          ms(),
          nestWinstonModuleUtilities.format.nestLike(appName),
          ...formatsForEnv,
        ),
      }),
    ],
  };
};

export const createLogger: (appName: string) => LoggerService = (
  appName: string,
) => {
  return WinstonModule.createLogger(getOptions(appName));
};
