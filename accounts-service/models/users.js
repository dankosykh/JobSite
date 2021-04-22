import Mongoose from 'mongoose';
import log from 'loglevel';

class UserClass {
    static async register (opts) {
        try {
            return this.create(opts);
        } catch (error) {
            log.debug('User.register', error);
            // check for dup email
        }
    }

    static async findByEmail (email) {
        return this.findOne({ email: email });
    }
}

const schema = Mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: false
        }
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
    }
);

export default Mongoose.model('user', schema.loadClass(UserClass));
