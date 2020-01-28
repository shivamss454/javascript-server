import {validateEmail} from "./helpers.js";
export const validEmail=[];
export const invalidEmail=[];

const validateUsers=function(users){
users.forEach((element)=>
   {
       const{traineeEmail,reviewerEmail}=element;

if(validateEmail(traineeEmail))
validEmail.push(traineeEmail);
else
invalidEmail.push(traineeEmail);
if(validateEmail(reviewerEmail))
validEmail.push(reviewerEmail);
else
invalidEmail.push(reviewerEmail);

})
}

//validateUsers(users);
console.log( `valid emails: ${validEmail}`);
console.log("invalid emails: " + invalidEmail);
console.log("valid count: "+ validEmail.length);
console.log("invalid count: "+ invalidEmail.length);

export {validateUsers};
 