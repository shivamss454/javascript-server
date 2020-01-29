const validateEmail = function(email){
    const regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
     return regex.test(email);
  }  
  export {validateEmail};