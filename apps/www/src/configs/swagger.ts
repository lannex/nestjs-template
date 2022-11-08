import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

export const buildSwagger = (
  app: INestApplication,
  buildOptions: BuildOptions,
) =>
  SwaggerModule.setup('docs', app, buildDocs(app, buildOptions), {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
