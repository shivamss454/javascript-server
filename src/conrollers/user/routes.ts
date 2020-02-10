import { Router } from 'express';
import validation from './validation';
import UserController from './controller';
import { post, put } from 'express/lib/application';
import validationhandler from '../../libs/routes/validationhandler';
import authmiddleware from '../../libs/routes/authmiddleware';
import { permissions } from '../../libs/routes/constants';

// import validate from './validation';
const UserRouter = Router();

UserRouter.route('/')
    .get(  validationhandler(validation.get), UserController.list)
    .post(  validationhandler(validation.create), UserController.create)
    .delete( validationhandler(validation.delete), UserController.delete)
    .put(validationhandler(validation.update), UserController.update);
    UserRouter.get('/:id', validationhandler(validation.delete), UserController.list);
    UserRouter.delete('/:id',  validationhandler(validation.delete), UserController.delete);
export default UserRouter;