const validateEmail = (email: string): boolean => {
   console.log('-=-=-=-=-', email);

   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
   return regex.test(email);
};
export { validateEmail };