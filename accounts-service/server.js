import express from 'express';
import cors from 'cors';
import log from 'loglevel';
import db from './db';
import Config from './config';
import routes from './routes';

log.setLevel(Config.app.logLevel);
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/employers', routes.employers);
app.use('/api/users', routes.users);
app.use('/api/auth', routes.auth);

export async function startServer () {
    await db.connect(Config.db).then((conn) => log.info('Mongo Connected'));
    await new Promise((resolve, reject) => {
        app.listen(Config.app.port, (server) => resolve(server));
    });
    log.info(`Server works on Port: ${Config.app.port}`);
}

if (process.env.NODE_ENV !== 'test') {
    startServer();
}
