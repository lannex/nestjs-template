import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const bootstrap = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.listen(port, host);

  Logger.log(`🚀 Application is running on: http://${host}:${port}`);
};

bootstrap();
