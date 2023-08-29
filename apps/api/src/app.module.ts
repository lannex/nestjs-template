import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { HealthcheckModule } from '@nestjs-template/healthcheck';

import { providers } from './app.providers';
import { configModules } from './configs/modules';

const libModules = [HealthcheckModule];
const modules = [];

@Module({
  imports: [...configModules, ...libModules],
  providers,
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    // NOTE: 글로벌 미들웨어 클래스는 bootstrap이 아닌 여기서만 등록 가능
  }
}
