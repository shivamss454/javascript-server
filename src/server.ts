import * as express from 'express';
import Iconfig from './config/IConfig';
import * as bodyParser from 'body-parser';
import notFoundRoutes from './libs/routes/notFoundRoute';
import errorHandler from './libs/routes/errorHandler';
export default class Server {
    private app: express.Application;
    constructor(private config: Iconfig) {
        this.app = express();
    }
    bootstrap = () => {

        console.log('inside bootstrap');
        this.initBodyParser();
        this.setuproutes();
        return this;
    };
    run = () => {
        const { app, config: { port, env } } = this;
        app.listen(port, (err) => {
            if (err)
                throw err;
            console.log('app is running successfully on ', { port }, { env });
        });
        app.use(notFoundRoutes);
        app.use(errorHandler);
        return this;
    
    }
    initBodyParser = () => {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use ( bodyParser.json());
        return this;
    }


    setuproutes() {
        this.app.get('/health-check', (req, res) => {
            console.log('inside setup routes');
            res.send('I am ok' + req.body.error);
        });
        return this;
    }

}