import { config } from 'dotenv';
import Iconfig from './IConfig';
config();
const configuration: Iconfig = Object.freeze({
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    secretkey: process.env.SECRET_KEY,
    mongoUri: process.env.MONGO_URL,
    password: process.env.PASSWORD
}
);
export default configuration;