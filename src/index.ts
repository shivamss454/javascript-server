import configuration from './config/Configuration';
import Server from './server';

const server = new Server(configuration);
server.bootstrap();
server.run();