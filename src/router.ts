import { Router } from 'express';
import { TraineeRouter } from './conrollers/trainee';
import  UserRouter  from './conrollers/user/routes';
const mainRouter = Router();
mainRouter.use('/trainee', TraineeRouter);
mainRouter.use('/user', UserRouter);
export default mainRouter;