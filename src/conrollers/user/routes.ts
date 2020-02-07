import { Router } from 'express';
import validation from './validation';
import usercontroller from './controller';
import { post, put } from 'express/lib/application';
import validationhandler from '../../libs/routes/validationhandler';
import authmiddleware from '../../libs/routes/authmiddleware';
import { permissions } from '../../libs/routes/constants';

// import validate from './validation';
const UserRouter = Router();

UserRouter.route('/user')
    .get( authmiddleware('getUsers', 'read'), validationhandler(validation.get), UserController.list)
    .post( authmiddleware('getUsers', 'read'), validationhandler(validation.create), UserController.create)
    .delete( validationhandler(validation.delete), UserController.delete)
    .put(validationhandler(validation.update), UserController.update);
    UserRouter.delete('/user/:id',authmiddleware('getUsers', 'read'),validationhandler(validation.delete), UserController.delete);
export default TraineeRouter;