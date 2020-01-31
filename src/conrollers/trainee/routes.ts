import { Router } from 'express';
import TraineeController from './controller';
import { post, put } from 'express/lib/application';
const TraineeRouter = Router();

TraineeRouter.route('/')
    .get( TraineeController.list)
    .post(TraineeController.create)
    .delete(TraineeController.delete)
    .put(TraineeController.update);
export default TraineeRouter;