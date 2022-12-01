import config from 'config';
import { cleanEnv, str } from 'envalid';

const getConfig = (val: string) => config.get<string>(val);

const env = cleanEnv(process.env, {
  APP_NAME: str(),
  NODE_ENV: str({ choices: ['local', 'development', 'production'] }),
  DB_HOST: str({ default: '' }),
  DB_PORT: str({ default: '' }),
  DB_USERNAME: str({ default: '' }),
  DB_PASSWORD: str({ default: '' }),
});

export const isProduction = env.NODE_ENV === 'production';

export const appName = env.APP_NAME;

// App
export const host = getConfig(`${appName}.host`);
export const port = getConfig(`${appName}.port`);

// DB
export const dbHost = env.DB_HOST || getConfig(`${appName}.db.host`);
export const dbPort = env.DB_PORT || getConfig(`${appName}.db.port`);
export const dbUsername =
  env.DB_USERNAME || getConfig(`${appName}.db.username`);
export const dbPassword =
  env.DB_PASSWORD || getConfig(`${appName}.db.password`);
