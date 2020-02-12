import { IPermissions } from './interfaces';
export const permissions: IPermissions = {
    'getUsers': {
      all: ['head-trainer'],
      read: ['trainer', 'trainee'],
      write: ['trainer'],
      delete: [],
    }
};
