import { ConfigModule as cm } from '@nestjs/config';

export const ConfigModule = cm.forRoot({
  // load: configRootKeys.map((key) => registerAs(key, () => config.get(key))),
  isGlobal: true,
});
