const validateEmail = function(email){
         console.log("-=-=-=-=-", email)

    const regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
     return regex.test(email);
  }  
  export {validateEmail};