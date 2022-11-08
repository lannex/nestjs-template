import fastifyCookie from '@fastify/cookie';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from '../app.module';
import { createLogger } from './logger';
import { buildSwagger } from './swagger';

const isDev = process.env.NODE_ENV !== 'production';

export const bootstrap = async (host: string, port: string) => {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { logger: createLogger('api') },
  );

  await app.register(fastifyCookie);

  app.enableCors({
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Origin', 'Authorization', 'X-Auth-Token'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });

  app.enableVersioning();

  if (isDev) {
    buildSwagger(app, { title: 'API 문서' });
  }

  await app.listen(port, host);

  Logger.log(`🚀 Application is running on: http://${host}:${port}`);
};
