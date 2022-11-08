import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

interface BuildOptions {
  title: string;
  path: string;
}

const createDocs = (app: INestApplication, title: BuildOptions['title']) =>
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

export const buildSwagger = (
  app: INestApplication,
  { title, path }: BuildOptions,
) =>
  SwaggerModule.setup(path, app, createDocs(app, title), {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
