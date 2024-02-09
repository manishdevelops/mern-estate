exports.errorHandler = (statusCode, message) => {
    console.log(123)
    const error = new Error(message);
    error.statusCode = statusCode;
    // error.message = message;
    return error;
};