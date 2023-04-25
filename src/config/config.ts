import dotenv from 'dotenv'

dotenv.config();

interface Env {
    PORT: string | number;
    API_URL: string;
}
export const env: Env = {
    PORT: process.env.PORT || 5000,
    API_URL: process.env.API_URL || 'YOU_API_URL',
}
