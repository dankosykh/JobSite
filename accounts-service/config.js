import dotenv from 'dotenv';

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

export default {
    db: {
        url: process.env.DB_URL,
        options: process.env.DB_OPTIONS || 'minSize=5&poolSize=100'
    },
    app: {
        port: parseInt(process.env.PORT) || 4000,
        logLevel: process.env.LOG_LEVEL || 'info',
        secret: process.env.SECRET
    }
};
