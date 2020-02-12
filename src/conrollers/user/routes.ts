import { Router } from 'express';
import IRequest from '../../libs/routes/IRequest';
import validation from './validation';
import UserController from './controller';
import { post, put } from 'express/lib/application';
import validationhandler from '../../libs/routes/validationhandler';
import authmiddleware from '../../libs/routes/authmiddleware';
import { permissions } from '../../libs/routes/constants';

// import validate from './validation';
const UserRouter = Router();

    UserRouter.get('/me', authmiddleware('getUsers', 'all'), (req: IRequest, res) => {
            console.log('Inside route', req.user);
            res.send(req.user);
    });
    UserRouter.get('/', authmiddleware('getUsers', 'all'), validationhandler(validation.get), UserController.list);
    UserRouter.post('/',  validationhandler(validation.create), UserController.create);
    UserRouter.delete('/', authmiddleware('getUsers', 'all'), validationhandler(validation.delete), UserController.delete);
    UserRouter.put('/', authmiddleware('getUsers', 'read'), validationhandler(validation.update), UserController.update);


export default UserRouter;