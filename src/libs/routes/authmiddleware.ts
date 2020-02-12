import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/Configuration';
import hasPermission from './hasPermission';
import configuration from '../../config/Configuration';
import { UserRepository } from '../../repositories/user/UserRepository';
import IRequest from './IRequest';

export default (module, permissiontype) => async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const userRepository = new UserRepository();
    console.log(';;;;;;;;;;AUTHMIDDLEWARE;;;;;;;;;;;', module, permissiontype);
    const token: string = req.headers['authorization'];
    const { secretkey: key } = config;
    const decodedUser = jwt.verify(token, key);
    console.log('jwt is', decodedUser);
    if (!decodedUser) {
      next({
        status: 403,
        error: 'unauthorized access',
        message: 'unauthorized access'
      });
    }
    const { _id, email } = decodedUser;
    userRepository.findOne({ _id,email: email })
      .then(user => {
        if (!user) {
          next({
            status: 403,
            error: 'Unauthorized Access',
            message: 'User does not Exist in the System'
          });
        } else {
          req.user = user;
        }
      })
      .then(() => {
        if (!hasPermission(module, decodedUser.role, permissiontype)) {
          next({
            status: 403,
            error: 'Unauthorized Access',
            message: 'Unauthorized Access'
          });
        }

        next();
      });

    const { secretkey } = config;
  }

  catch (error) {
    next({
      status: 403,
      error: 'unauthorized access',
      message: error.message

    });
  }

};