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
    UserRouter.get('/',  validationhandler(validation.get), UserController.getAllList);
    UserRouter.post('/',  validationhandler(validation.create), UserController.create);
    UserRouter.delete('/',  validationhandler(validation.delete), UserController.delete);
    UserRouter.put('/', validationhandler(validation.update), UserController.update);
    UserRouter.delete('/:id',  validationhandler(validation.delete), UserController.delete);

export default UserRouter;