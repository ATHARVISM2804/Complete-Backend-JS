


//Promises// This utility function wraps an async function to handle errors gracefully in Express.js
// It catches any errors thrown by the async function and passes them to the next middleware.
// If the error is not caught by the next middleware, it will be sent to the client as

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res, next)).catch((err) =>
        next(err))
    }
}


export {asyncHandler}

// setps 
// const asyncHandler =() => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () =>{}
// This utility function wraps an async function to handle errors gracefully in Express.js
// It catches any errors thrown by the async function and passes them to the next middleware.
// If the error is not caught by the next middleware, it will be sent to the client as
// a response with a 500 status code.






// Wrapper function for async route handlers in Express.js
// It catches errors and sends a JSON response with the error message and status code.
// This is useful for avoiding repetitive try-catch blocks in every route handler.
// src/utils/asyncHandler.js
// src/utils/asyncHandler.js
// Usage: import asyncHandler from './utils/asyncHandler.js';

// const asyncHandler = (fn) => async (req , res , next) => {

//     try {
//         await fn(req, res, next);
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             sucess: false,
//             message : err.message
//         })
        
//     }
// }