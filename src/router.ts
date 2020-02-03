import { Router } from 'express';
import { TraineeRouter } from './conrollers/trainee';

const mainRouter = Router();
mainRouter.use('/trainee', TraineeRouter);

export default mainRouter;