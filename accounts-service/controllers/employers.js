import BaseController from './base';
import Employer from '../models/employers';
import Auth, { AccountTypes } from '../models/auth';

class EmployerController extends BaseController {
    async list (req, resp) {
        const employers = await Employer.find({}); // TBD

        super.responseOk(resp, employers);
    }

    async getById (req, resp) {
        const { id } = req.params;
        if (!super.isValidObjectId(id)) super.responseInputError(resp);

        const employer = await Employer.findById(id);

        if (!employer) {
            return super.responseNotFound(resp);
        }

        super.responseOk(resp, employer);
    }

    async register (req, resp) {
        const {
            email, password, firstName, lastName, company, location
        } = req.body;

        const dup = await Employer.findByEmail(email);
        if (dup) {
            return super.responseInputError(resp, 'Email already registered.');
        }

        const [employer, auth] = await Promise.all([
            Employer.register({ email, firstName, lastName, location, company }),
            Auth.signUp({ accountType: AccountTypes.Employer, email, password })
        ]);

        const accessToken = await auth.authenticate({ email, password });

        super.responseOk(resp, {
            ...employer.toJSON(),
            accessToken
        });
    }

    async updateProfile (req, resp) {
        const {
            email, company, firstName, lastName, location
        } = req.body;

        const employer = data.find(e => e.email === email);

        if (!employer) {
            return super.responseNotFound(resp);
        }

        const updated = {
            ...employer, company, firstName, lastName, location
        };

        super.responseOk(resp, updated);
    }
}

const singleton = new EmployerController();

export default singleton;
