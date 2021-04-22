import BaseController from './base';
import Auth from '../models/auth';

class AuthController extends BaseController {
    async login (req, resp) {
        const [auth, accessToken] = await Auth.signIn(req.body);

        if (!auth) {
            return super.responseInputError(resp, Error('Invalid credentials'));
        }

        const authenticated = {
            ...auth.toJSON(),
            password: undefined,
            accessToken: accessToken
        };

        super.responseOk(resp, authenticated);
    }
}

const singleton = new AuthController();

export default singleton;
