import config from 'config';
import { ConfigModule as cm, registerAs } from '@nestjs/config';

import { appName } from '../values';

const configRootKeys = ['shared', appName];

export const ConfigModule = cm.forRoot({
  load: configRootKeys.map((key) => registerAs(key, () => config.get(key))),
  isGlobal: true,
});
