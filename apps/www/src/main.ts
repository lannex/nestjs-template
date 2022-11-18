import { bootstrap } from './bootstrap';
import { host, port } from './configs/values';

bootstrap(host || '0.0.0.0', port || '3000');
