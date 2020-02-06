import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/Configuration';
import hasPermission from './hasPermission';


export default (module, permissiontype) => (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(';;;;;;;;;;AUTHMIDDLEWARE;;;;;;;;;;;', module, permissiontype);
    const token: string = req.headers['authorization'];
    // console.log('token', token);
    const decodedUser = jwt.verify(token, config.secretkey);
    console.log('jwt is', decodedUser);
    if (!decodedUser) {
      next({
        status: 403,
        error: 'unauthorized access',
        message: 'unauthorized access'
      });
    }
    if (!hasPermission(module, decodedUser.role, permissiontype)) {
      next({
        status: 403,
        error: 'unauthorized access',
        message: 'trainee does not have permission'
      });
    }
    console.log('user is ', decodedUser);
    const { secretkey } = config;
    next();
  }

  catch (error) {
    next({
      status: 403,
      error: 'unauthorized access',
      message: error.message

    });
  }

};