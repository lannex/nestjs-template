import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { HealthcheckModule } from '@nestjs-template/healthcheck';

import { providers } from './app.providers';
import { configsModule } from './configs/modules';

@Module({
  imports: [...configsModule, HealthcheckModule],
  providers,
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    // NOTE: 글로벌 미들웨어 클래스는 bootstrap이 아닌 여기서만 등록 가능
  }
}
