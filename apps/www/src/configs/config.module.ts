import { ConfigModule as cm } from '@nestjs/config';
import Joi from 'joi';
import path from 'path';

const envFilePath = [path.basename(__dirname)]
  .map((app) => `./apps/${app}/src/environments`)
  .map((envPath) => `${envPath}/.env.${process.env.NODE_ENV}`);

const validationSchema = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
});

export const ConfigModule = cm.forRoot({
  envFilePath,
  validationSchema,
  isGlobal: true,
});
