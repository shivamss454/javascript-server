import { fun, myfun } from "./patterns";
import {hasPermission} from "./utils";
import {validateEmail} from "./utils";
import {validateUsers} from "./utils";
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

//import { validateEmail, validateUsers} from "./utils";
fun();
myfun();
hasPermission('getUsers1','vinay','read');
validateUsers(users);
