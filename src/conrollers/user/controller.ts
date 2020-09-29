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
         if (!result) {
            return  res.status(200).send({
                 err: 'password does not exist',
                 status: 422
             });
         }
         console.log('password matched');
         const { secretkey: key } = configuration;
          const token = await jwt.sign({email: user['email'], id: user['originalId']}, key);
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


}
export default UserController.getInstance();