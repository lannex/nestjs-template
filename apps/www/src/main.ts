import { bootstrap } from './configs/bootstrap';
import { host, port } from './configs';

bootstrap(host || '0.0.0.0', port || '3000');
