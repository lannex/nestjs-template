import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

interface BuildOptions {
  title: string;
  description: string;
  path: string;
}

const createDocs = (
  app: INestApplication,
  { title, description }: Omit<BuildOptions, 'path'>,
) =>
  SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .addBearerAuth()
      .addCookieAuth('refresh')
      .setVersion('0.0.1')
      .build(),
  );

export const buildSwagger = (
  app: INestApplication,
  { title, path, description }: BuildOptions,
) =>
  SwaggerModule.setup(path, app, createDocs(app, { title, description }), {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
