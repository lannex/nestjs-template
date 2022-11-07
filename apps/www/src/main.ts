import { bootstrap } from './bootstrap';

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '3000';

bootstrap(host, port);
