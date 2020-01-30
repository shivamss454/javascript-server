// import { ErrorHandler } from 'express';

 const errorHandler = ( err, req , res, next) => {
    console.log('inside errorhandler');
    console.log('Error' , err);
    const {error, status } =err

    const errorMessage = {
    error: error || 'Not Found',
    message: 'error',
    status: status || 500,
    timestamp: new Date()
    };
    // next({ errorMessage});
    res.send(errorMessage);
};
export default errorHandler;