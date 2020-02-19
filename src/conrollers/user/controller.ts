import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';
import { emit } from 'cluster';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/Configuration';


class UserController {
    static userRepository: UserRepository;
    static instance: UserController;
    userRepository = new UserRepository();
    static getInstance = () => {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    };

create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('========.Inside create user==========');
        const {email , name, address, dob, hobbies, mobilenumber, password} = req.body;
        await bcrypt.hash(password, 10, (err, hash) => {
        if (!err)
        this.userRepository.create({ name, address, email, dob, mobilenumber, hobbies , password: hash
        });
            return SystemResponse.success(res, 'user added successfully');
     });
   }
  catch (err) {
    console.log(err);
    }
}
login = async (req: Request, res: Response, next) => {
try {
   console.log(';;;;;;inside user Login;;;;;;;;');
   const {email, password} = req.body;
   const user = await  this.userRepository.findEmail(email);
   if (!user) {
   return  res.status(200).send({
        err: 'User not exist',
        status: 404
    });
   }

  console.log('user===', user);
         const result = await bcrypt.compare(password, user.password);
         console.log('rrrrr', result);
         if (!result) {
            return  res.status(200).send({
                 err: 'password does not exist',
                 status: 422
             });
         }
         console.log('password matched');
         const { secretkey: key } = configuration;
          const token = await jwt.sign({email: user[' email'], id: user[' originalId']}, key);
         console.log('token is', token);
        return res.status(200).send({
            message: 'login successfull',
            data: token,
            status: 'success'
        });

}
catch (err) {
    next({
        err: err.message
    });
}
}

getAllList = async (req: Request, res: Response, next) => {
        try {
            console.log(';;;;;Inside List User;;;;;;');

            const user = await this.userRepository.findall();
                if (user)
                    return SystemResponse.success(res, user, 'user listed successfully');
        }
        catch (err) {
           return err;
        }
    }

    update =  async (req: Request, res: Response, next) => {
        try {

            console.log('========.Inside update User==========');
            const { id, dataToUpdate } = req.body;
            const user = await this.userRepository.update({ _id: id }, dataToUpdate);
            if (user)
                    return SystemResponse.success(res, user, 'user updated successfully');
            }
        catch (err) {
            return err;
        }
    }

    delete = async (req: Request, res: Response, next) => {
        try {

            console.log('========.Inside Delete User==========');
            const { id } = req.params;
                const user = await this.userRepository.delete(id);
                       if (user)
                        return SystemResponse.success(res, user, 'user Deleted succesfully');
             }
        catch (err) {
            return err;
        }

    }
}
export default UserController.getInstance();