import { Request, Response, NextFunction } from 'express';
import SystemResponse from '../../libs/SystemResponse';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../../repositories/user/UserRepository';

class TraineeController {
    static userRepository: UserRepository;
    static instance: TraineeController;
    userRepository = new UserRepository();
    static getInstance = () => {
    if (TraineeController.instance) {
        return TraineeController.instance;
    }
    TraineeController.instance = new TraineeController();
    return TraineeController.instance;
}


create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('========.Inside create Trainee ==========');
        const {email , name, address, dob, hobbies, mobilenumber, password} = req.body;
        await bcrypt.hash(password, 10, (err, hash) => {
        if (!err)
        this.userRepository.create({ name, address, email, dob, mobilenumber, hobbies , password: hash
        });
            return SystemResponse.success(res, 'trainee added successfully');
     });

   }
   catch (err) {
       return err;
   }
}

List = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(';;;;;Inside List Trainee;;;;;;');
       const { skip , limit  } = req.query;
       console.log('data=>', skip , limit);

        const user = await this.userRepository.findall(skip, limit);
            if (user.length === 0 ) {
                    return res.status(200).send({
                         err: 'User not exist',
                         status: 404
                     });
                    }
        const count = await this.userRepository.count();
console.log('zzz',user);
         //const {email} = user[count]['email'];
         // const res1 = await this.userRepository.sort(email);
         // console.log('res1uhjjjj',res1);
                   return SystemResponse.success(res, {...user, Count: count}, 'trainee listed successfully');

        }
    catch (err) {
       return err;
    }
}

update =  async (req: Request, res: Response, next) => {
    try {

        console.log('========.Inside update Trainee==========');
        const { id, dataToUpdate } = req.body;
        const user = await this.userRepository.update({ _id: id }, dataToUpdate);
        if (user)
                return SystemResponse.success(res, user, 'Trainee updated successfully');
        }
    catch (err) {
        return err;
    }
}


delete = async (req: Request, res: Response, next) => {
    try {

        console.log('========.Inside Delete Trainee==========');
        const { id } = req.params;
            const user = await this.userRepository.delete(id);
                   if (user)
                    return SystemResponse.success(res, user, 'Trainee Deleted succesfully');
         }
    catch (err) {
        return err;
    }

}

}
export default TraineeController.getInstance();