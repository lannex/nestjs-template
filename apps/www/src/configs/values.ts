import config from 'config';
import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
  APP_NAME: str(),
  NODE_ENV: str({ choices: ['local', 'development', 'production'] }),
});

export const isProduction = env.NODE_ENV === 'production';

export const appName = env.APP_NAME;

export const host = config.get<string>(`${appName}.host`);
export const port = config.get<string>(`${appName}.port`);
