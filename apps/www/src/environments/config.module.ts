import { ConfigModule as cm } from '@nestjs/config';
import Joi from 'joi';

const validationSchema = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
});

export const ConfigModule = cm.forRoot({
  envFilePath: [`.env.${process.env.NODE_ENV}`],
  isGlobal: true,
  validationSchema,
});
