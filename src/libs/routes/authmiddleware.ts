import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/Configuration';
import hasPermission from './hasPermission';
import configuration from '../../config/Configuration';
import { UserRepository } from '../../repositories/user/UserRepository';


export default (module, permissiontype) => (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(';;;;;;;;;;AUTHMIDDLEWARE;;;;;;;;;;;', module, permissiontype);
     const token: string = req.headers['authorization'];
    const { secretkey: key } = config;
    // console.log('token', config,  key);
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
    UserRepository
    .findOne({ _id: _id, email: email })
    .then(user => {
    if (!user) {
    next({
    status: 403,
    error: "Unauthorized Access",
    message: "User does not Exist in the System"
    });
    }
    req.user = user;
    })
    .then(() => {
    if (!hasPermission(module, decodedUser["role"], permissiontype)) {
    next({
    status: 403,
    error: "Unauthorized Access",
    message: "Unauthorized Access"
    });
    }
    
    next();
    });

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