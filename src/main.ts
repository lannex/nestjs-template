import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

if (process.env.NODE_ENV === 'production') {
  const main = async () => {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  };
  main();
}

export const viteNodeApp = NestFactory.create(AppModule);
