import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
  APP_NAME: str(),
  NODE_ENV: str({ choices: ['local', 'development', 'production'] }),
  HOST: str({ default: '' }),
  PORT: str({ default: '' }),
  DB_HOST: str(),
  DB_PORT: str(),
  DB_USERNAME: str(),
  DB_PASSWORD: str(),
  DB_DATABASE: str({ default: '' }),
  REDIS_HOST: str(),
  REDIS_PORT: str(),
  REDIS_PASSWORD: str(),
});

export const isProduction = env.NODE_ENV === 'production';

export const appName = env.APP_NAME;

// App
export const { HOST: host, PORT: port } = env;

// DB
export const {
  DB_HOST: dbHost,
  DB_PORT: dbPort,
  DB_USERNAME: dbUsername,
  DB_PASSWORD: dbPassword,
  DB_DATABASE: dbDatabase,
} = env;

// Redis
export const {
  REDIS_HOST: redisHost,
  REDIS_PORT: redisPort,
  REDIS_PASSWORD: redisPassword,
} = env;
