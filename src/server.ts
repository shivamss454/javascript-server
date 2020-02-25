import * as express from 'express';
import Iconfig from './config/IConfig';
import * as bodyParser from 'body-parser';
import notFoundRoutes from './libs/routes/notFoundRoute';
import errorHandler from './libs/routes/errorHandler';
import router from './router';
import app = require('express/lib/application');
import * as mongoose from 'mongoose';
import Database from './libs/Database';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';

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
    }
    initSwagger = () => {
        const options = {
            definition: {
                info: {
                    title: 'javascript-client API',
                    version: '1.0.0',
                },
                securityDefinitions: {
                    Bearer: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'headers'
                    }
                }
            },
            basepath: '/api',
            swagger: '2.0',
            apis: ['./dist/conrollers/**/routes.js']
        };
        const swaggerSpec = swaggerJsDoc(options);
        return swaggerSpec;
    }
    initBodyParser = () => {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use ( bodyParser.json());
        return this;
    }


    setuproutes() {
        this.app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
        this.app.get('/health-check', (req, res) => {
            console.log('inside setup routes');
            res.send('I am ok' + req.body.error);
        });
         this.app.use('/api', router);
        return this;
    }
    run = () => {
        const { app, config: { port, env, mongoUri} } = this;
        Database.open(mongoUri).then((res) => {
            console.log('Response', res);
            app.listen(port, (err) => {
                if (err) {
                    throw err;
                }
                console.log('app is running successfully on ', { port }, { env });
            });
        }).catch(err => {
            console.log(err);
            throw err;
        });
        app.use(notFoundRoutes);
        app.use(errorHandler);
        return this;
    }

}