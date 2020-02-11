import { Router } from 'express';
import validation from './validation';
import UserController from './controller';
import { post, put } from 'express/lib/application';
import validationhandler from '../../libs/routes/validationhandler';
import authmiddleware from '../../libs/routes/authmiddleware';
import { permissions } from '../../libs/routes/constants';
import IRequest from '../../libs/routes/IRequest';

// import validate from './validation';
const UserRouter = Router();

UserRouter.route('/')
    .get(  authmiddleware('getUsers','read'),validationhandler(validation.get), UserController.list)
    .post(  validationhandler(validation.create), UserController.create)
    .delete( validationhandler(validation.delete), UserController.delete)
    .put(validationhandler(validation.update), UserController.update);
    UserRouter.get('/:id', validationhandler(validation.delete), UserController.list);
    UserRouter.delete('/:id',  validationhandler(validation.delete), UserController.delete);

    UserRouter.route('/me')
    .get(authmiddleware('getUsers', 'read'),(req: IRequest,res)=>{
        console.log('Inside route',req.user);
        res.send(req.user);
    })
export default UserRouter;