import { fun, myfun } from "./patterns";
import {hasPermission} from "./utils";
import {validateUsers} from "./utils";
import {validEmail,invalidEmail} from "./utils";
const users=[
    {
      traineeEmail:"shivam.sharma@successive.tech",
      reviewerEmail:"megha.rawat@succssive.tech"
    },
    {
      traineeEmail:"neha.goel@succesive.tech",
      reviewerEmail:"megha.rawat@successive.tech"
  
    }
  ]
fun(4);
myfun(4);
hasPermission('getUsers1','vinay','read');
validateUsers(users);
console.log( `valid emails: ${validEmail}`);
console.log("invalid emails: " + invalidEmail);
console.log("valid count: "+ validEmail.length);
console.log("invalid count: "+ invalidEmail.length);

