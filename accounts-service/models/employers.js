import Mongoose from 'mongoose';
import log from 'loglevel';

class EmployerClass {
    static async register (opts) {
        try {
            return this.create(opts);
        } catch (error) {
            log.debug('Employer.register', error);
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
        company: {
            type: String,
            required: true
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

export default Mongoose.model('employer', schema.loadClass(EmployerClass));
