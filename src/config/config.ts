 import dotenv from 'dotenv';

// Read the .env file
dotenv.config();

 // Set all the variables that you need to use in the application
 export const envConfig = {
    MARVEL_ROUTE: process.env.MARVEL_ROUTE || '',
    PUBLIC_KEY: process.env.PUBLIC_KEY || '',
    PRIVATE_KEY: process.env.PRIVATE_KEY || '',
    PORT: process.env.PORT || 3000
 }