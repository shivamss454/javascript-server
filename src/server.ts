import * as express from 'express';
import Iconfig from './config/IConfig';
export default class Server {
    private app: express.Application;
    constructor(private config: Iconfig) {
        this.app = express();
    }
    bootstrap = () => {

        console.log('inside bootstrap');
        this.setuproutes();
         return this;
    };
    run = () => {
        const { app, config: { port, env } } = this;
        app.listen(port, (err) => {
            if (err)
                throw err;
            console.log('app is running successfully on ' ,{ port }, { env });
        });
       return this;
    }

    setuproutes() {
        this.app.get('/healthcheck', (req: express.Request, res: express.Response) => {
            console.log()
            res.send('I am ok');

        });
        // return this;
    }

}