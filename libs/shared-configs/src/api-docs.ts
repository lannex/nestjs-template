import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

interface BuildOptions {
  title: string;
  description: string;
  path: string;
  version?: string;
  hosts: string[];
}

interface CreateDocs {
  (
    app: INestApplication,
    { title, description, version }: Omit<BuildOptions, 'path'>,
  ): OpenAPIObject;
}

const createDocs: CreateDocs = (
  app: INestApplication,
  { title, description, hosts, version = '0.0.1' }: Omit<BuildOptions, 'path'>,
) => {
  const builder = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .addBearerAuth()
    .addCookieAuth('refresh')
    .setVersion(version);

  hosts.forEach((host) => builder.addServer(host));

  return SwaggerModule.createDocument(app, builder.build());
};

interface BuildSwagger {
  (
    app: INestApplication,
    { title, path, description, ...rest }: BuildOptions,
  ): void;
}

export const buildSwagger: BuildSwagger = (
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
