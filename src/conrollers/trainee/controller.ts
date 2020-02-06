import { Request, Response } from 'express';
class TraineeController {
    static instance: TraineeController;
    static getInstance = () => {
    if (TraineeController.instance) {
        return TraineeController.instance;
    }
    TraineeController.instance = new TraineeController();
    return TraineeController.instance;
}

create = (req: Request, res: Response,next) => {
    console.log('========.Inside createTrainee==========');
    res.send({
    status: 'ok',
    message: 'Trainee added successfully',
    data: {
         id: 1,
         name: 'yogesh',
         address: 'noida'
    }
    });
}

list = (req: Request, res: Response, next) => {
    console.log('=========Inside TraineeList===========');
    res.send({
    status: 'ok',
    message: 'Trainee list is:',
    data: {
         id: 1,
         name: 'yogesh',
         address: 'noida'
    }
    });
}

update = (req: Request, res: Response, next) => {
    console.log('===========Inside updateTrainee========');
    res.send({
    status: 'ok',
    message: 'Trainee updated successfully',
    data: {
         id: 1,
         name: 'yogesh',
         address: 'noida'
    }
    });
}

delete = (req: Request, res: Response, next) => {
    console.log('==========Inside deleteTrainee==========');
    res.send({
    status: 'ok',
    message: 'Trainee deleted successfully',
    data: {
         id: 1,
         name: 'yogesh',
         address: 'noida'
    }
    });
}
}
export default TraineeController.getInstance();