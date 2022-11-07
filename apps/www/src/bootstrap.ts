import fastifyCookie from '@fastify/cookie';
import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

const isDev = process.env.NODE_ENV !== 'production';

interface BuildOptions {
  title: string;
}

const buildDocs = (
  app: INestApplication,
  { title = 'API 문서' }: BuildOptions,
) =>
  SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle(title)
      .setDescription('')
      .addBearerAuth()
      .addCookieAuth('refresh')
      .setVersion('0.0.1')
      .build(),
  );

const buildSwagger = (app: INestApplication, buildOptions: BuildOptions) =>
  SwaggerModule.setup('docs', app, buildDocs(app, buildOptions), {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

export const bootstrap = async (host: string, port: string) => {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.register(fastifyCookie);

  app.enableCors({
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Origin',
      'Authorization',
      'X-Auth-Token',
      'X-Secret-Key',
    ],
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
