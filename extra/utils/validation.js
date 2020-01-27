const validEmail=[];
const invalidEmail=[];
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
validateEmail=function(email){
  const regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
   return regex.test(email);
   //console.log("-=-=-=-=-", x)
   
}
validateUsers=function(users){
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
validateUsers(users);
console.log( `valid emails: ${validEmail}`);
console.log("invalid emails: " + invalidEmail);
console.log("valid count: "+ validEmail.length);
console.log("invalid count: "+ invalidEmail.length);