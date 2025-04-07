import {config as dotenvConfig } from 'dotenv';
dotenvConfig();

export const dotenv = {
    PORT : process.env.PORT || ''
}