import Mongoose, { ObjectId } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Config from '../config';
import User from './users';
import Employer from './employers';

const saltRounds = 10;

export const AccountTypes = {
    Employer: 'Employer',
    User: 'User',
    Admin: 'Admin'
};

class AuthClass {
    static async signUp (opts) {
        return this.create({
            ...opts,
            password: await bcrypt.hash(opts.password, saltRounds)
        });
    }

    static async signIn (credentials) {
        const auth = await this.findOne({ email: credentials.email });
        if (auth) {
            const accessToken = await auth.authenticate(credentials);
            if (accessToken) {
                return [auth, accessToken];
            }
        }
        return [];
    }

    async authenticate (credentials) {
        const user = this.accountType === AccountTypes.User ? await User.findByEmail(this.email) : null;
        const employer = this.accountType === AccountTypes.Employer ? await Employer.findByEmail(this.email) : null;

        if (bcrypt.compare(credentials.password, this.password)) {
            const accessToken = await this.generateAccessToken({
                accountType: this.accountType,
                employerId: employer && employer._id,
                userId: user && user._id
            });
            return accessToken;
        }
        return null;
    }

    /*
    static async generateAdminAccessToken ({ userId, role }) {
        const payload = {
            userId, role
        };
        jwt.sign(payload, Config.app.secret, {
            audience: 'admin-dashboard',
            expiresIn: 360
        });
    }
    */

    async generateAccessToken ({ accountType, userId, employerId }) {
        const payload = {
            accountType,
            userId,
            employerId
        };
        return new Promise((resolve, reject) => {
            jwt.sign(
                payload, Config.app.secret,
                { expiresIn: 3600 },
                (error, accessToken) => {
                    if (error) reject(error);
                    else resolve(accessToken);
                }
            );
        });
    }
}

const schema = Mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        accountType: {
            type: String,
            required: true,
            enum: Object.keys(AccountTypes)
        }
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
    }
);

export default Mongoose.model('auth', schema.loadClass(AuthClass));
