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

export {validateUsers};
 