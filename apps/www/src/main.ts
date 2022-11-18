import { bootstrap } from './bootstrap';
import { host, port } from './configs/variables';

bootstrap(host || '0.0.0.0', port || '3000');
