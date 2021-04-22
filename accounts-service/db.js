import Mongoose from 'mongoose';

const defaultOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: false
};

const connect = async ({ url, options }) => {
    const connectionString = `${url}?${options}`;
    return Mongoose.connect(connectionString, defaultOptions);
};

export default {
    connect
};
