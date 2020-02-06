import { Router } from 'express';
import config from './validation';
import TraineeController from './controller';
import { post, put } from 'express/lib/application';
import validationhandler from '../../libs/routes/validationhandler';
import authmiddleware from '../../libs/routes/authmiddleware';
import { permissions } from '../../libs/routes/constants';

// import validate from './validation';
const TraineeRouter = Router();

TraineeRouter.route('/')
    .get( authmiddleware(permissions.getUsers, 'read'), validationhandler(config.get), TraineeController.list)
    .post( validationhandler(config.create), TraineeController.create)
    .delete( validationhandler(config.delete), TraineeController.delete)
    .put(validationhandler(config.update), TraineeController.update);
    TraineeRouter.delete('/:id', validationhandler(config.delete), TraineeController.delete);
export default TraineeRouter;