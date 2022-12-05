import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

interface BuildOptions {
  title: string;
  description: string;
  path: string;
  version?: string;
  localhost?: string;
  host?: string;
}

const createDocs = (
  app: INestApplication,
  {
    title,
    description,
    version = '0.0.1',
    localhost = 'http://localhost:3000',
    host = '',
  }: Omit<BuildOptions, 'path'>,
) => {
  return SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .addBearerAuth()
      .addCookieAuth('refresh')
      .setVersion(version)
      .addServer(localhost)
      .addServer(host)
      .build(),
  );
};

export const buildSwagger = (
  app: INestApplication,
  { title, path, description, ...rest }: BuildOptions,
) =>
  SwaggerModule.setup(
    path,
    app,
    createDocs(app, { title, description, ...rest }),
    {
      swaggerOptions: { defaultModelsExpandDepth: -1 },
    },
  );
