import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/Configuration';
import hasPermission from './hasPermission';
import configuration from '../../config/Configuration';
import IRequest from './IRequest';
import { UserRepository } from '../../repositories/user/UserRepository';

export default (module, permissiontype) => async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const userRepository = new UserRepository();
    console.log(';;;;;;;;;;AUTHMIDDLEWARE;;;;;;;;;;;', module, permissiontype);
    const token: string = await req.headers.authorization;
    const { secretkey: key } = configuration;
    const decodedUser = await jwt.verify(token, key);
    console.log('jwt is', decodedUser);
    if (!decodedUser) {
      return next({
        status: 403,
        error: 'unauthorized access',
        message: 'unauthorized access'
      });
    }
    const { email } = decodedUser;
    const result = await userRepository.findbyEmail(email);
        if (!result) {
          return next({
            status: 403,
            error: 'Unauthorized Access',
            message: 'User does not Exist in the System'
          });
        }
         // req.user = result;
          const role: string = result.role;
          console.log('rrrr', role);
        if (!hasPermission(module, decodedUser.role, permissiontype)) {
          return next({
            status: 403,
            error: 'Unauthorized Access',
            message: 'Unauthorized Access'
          });
        }

        next();

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