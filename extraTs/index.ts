import { fun, myfun } from './patterns';
import { hasPermission } from './utils';
import { validateEmail } from './utils';
import { validateUsers } from './utils';
import { validEmail, invalidEmail } from './utils';
import { Iusers } from './interface';
const users: Iusers = [
  {
    traineeEmail: 'shivam.sharma@successive.tech',
    reviewerEmail: 'megha.rawat@succssive.tech'
  },
  {
    traineeEmail: 'neha.goel@succesive.tech',
    reviewerEmail: 'megha.rawat@successive.tech'

  }
];

// import { validateEmail, validateUsers} from "./utils";
fun(5);
myfun(5);
hasPermission('getUsers1', 'vinay', 'read+');
validateUsers(users);
console.log( `valid emails: ${validEmail}`);
console.log('invalid emails: ' + invalidEmail);
console.log('valid count: ' + validEmail.length);
console.log('invalid count: ' + invalidEmail.length);
