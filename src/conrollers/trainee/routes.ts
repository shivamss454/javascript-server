import { Router } from 'express';
import config from './validation';
import TraineeController from './controller';
import { post, put } from 'express/lib/application';
import validationhandler from '../../libs/routes/validationhandler';
import authmiddleware from '../../libs/routes/authmiddleware';
import { permissions } from '../../libs/routes/constants';

const TraineeRouter = Router();

TraineeRouter.route('/')
    .get( authmiddleware('getUsers', 'all'), validationhandler(config.get), TraineeController.List)
    .post( authmiddleware('getUsers', 'all'), validationhandler(config.create), TraineeController.create)
    .delete( authmiddleware('getUsers', 'all'), validationhandler(config.delete), TraineeController.delete)
    .put( authmiddleware('getUsers', 'all'), validationhandler(config.update), TraineeController.update);
    TraineeRouter.delete('/:id', validationhandler(config.delete), TraineeController.delete);
export default TraineeRouter;