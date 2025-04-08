import {config as dotenvConfig } from 'dotenv';
dotenvConfig();

export const config = {
    PORT : process.env.PORT || '',
    MONGODB_URI : process.env.MONGODB_URI || '',
    DBNAME : process.env.DBNAME || '',
}