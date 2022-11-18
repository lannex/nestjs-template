import config from 'config';

export const isProduction = process.env.NODE_ENV === 'production';

export const appName = 'www';

export const host = config.get<string>(`${appName}.host`);
export const port = config.get<string>(`${appName}.port`);