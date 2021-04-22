import express from 'express';
import Auth from './controllers/auth';
import Employers from './controllers/employers';
import Users from './controllers/users';

const auth = express.Router();
const employers = express.Router();
const users = express.Router();

async function dummy (req, resp) {
    resp.status(200).send({
        ok: true,
        error: null,
        data: {}
    });
}

// AUTH

// login
auth.post('/', Auth.login);

// EMPLOYER

// register
employers.post('/', Employers.register);
// update profile
employers.put('/', dummy);
// list
employers.get('/', Employers.list);
// details
employers.get('/:id', Employers.getById);

// USERS

// register
users.post('/', Users.register);
// update profile
users.put('/', dummy);
// list
users.get('/', Users.list);
// details
users.get('/:id', Users.getById);

export default {
    auth,
    employers,
    users
};
