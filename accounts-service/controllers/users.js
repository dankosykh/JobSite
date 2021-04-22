import BaseController from './base';
import User from '../models/users';
import Auth, { AccountTypes } from '../models/auth';

class UserController extends BaseController {
    async list (req, resp) {
        const users = await User.find({}); // tbd

        super.responseOk(resp, users);
    }

    async getById (req, resp) {
        const { id } = req.params;
        if (!super.isValidObjectId(id)) super.responseInputError(resp);

        const user = await User.findById(id);

        if (!user) {
            return super.responseNotFound(resp);
        }

        super.responseOk(resp, user);
    }

    async register (req, resp) {
        const {
            email, firstName, lastName, location, password
        } = req.body;

        const dup = await User.findByEmail(email);
        if (dup) {
            return super.responseInputError(resp, 'Email already registered.');
        }

        const [user, auth] = await Promise.all([
            User.register({ email, firstName, lastName, location }),
            Auth.signUp({ accountType: AccountTypes.User, email, password })
        ]);
        const accessToken = await auth.authenticate({ email, password });

        super.responseOk(resp, {
            ...user.toJSON(),
            accessToken
        });
    }

    async updateProfile (req, resp) {
        const {
            email, firstName, lastName, location
        } = req.body;

        const user = await User.findByEmail(email);

        if (!user) {
            return super.responseNotFound(resp);
        }
        // tbd: update !!
        const updated = {
            ...user, firstName, lastName, location
        };

        super.responseOk(resp, updated);
    }
}

const singleton = new UserController();

export default singleton;
