import configuration from './config/Configuration';
import Server from './server';
import authmiddleware from './libs/routes/authmiddleware';
const server = new Server(configuration);
server.bootstrap();
server.run();
server.initSwagger();