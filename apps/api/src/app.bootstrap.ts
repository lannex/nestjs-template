import fastifyCookie from '@fastify/cookie';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { buildSwagger } from '@nestjs-template/shared-configs';

import { AppModule } from './app.module';
import { createLogger } from './configs/logger';
import { isProduction } from './configs/values';

export const bootstrap = async (host: string, port: string) => {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      // bodyLimit: 30 * 1024 * 1024,
    }),
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

  if (!isProduction) {
    buildSwagger(app, {
      title: 'API 문서',
      description: 'API 문서 설명입니다.',
      path: '/docs',
      hosts: ['http://localhost:3000'],
    });
  }

  await app.listen(port, host);

  Logger.log(`🚀 Application is running on: http://${host}:${port}`);
};
