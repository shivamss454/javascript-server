// import { ErrorHandler } from 'express';

 const errorHandler = ( err, req , res, next) => {
    console.log('inside errorhandler');
    console.log('Error' , err);
    const {error, status, message } = err;
    const errorMessage = {
    errors: error || 'Not Found',
    status: status || 500,
    message: message,
    timestamp: new Date()
    };
    res.send(errorMessage);
};
export default errorHandler;