// require('dotenv').config({path: './env'}) 

// more good practice is to use dotenv in the entry point of the application
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
     path: './env'
     });


connectDB()


















/*  //if is 
;(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error;
        })

        app.listen(process.env.PORT,() => {
            console.log(`App is running on port ${process.env.PORT}`);
        } )
    } catch (error) {
        comsole.error("ERROR:",error);
        throw error;    
        
    }
})() */