import { ObjectId } from 'bson';

export default class BaseController {
    isValidObjectId (objectId) {
        return ObjectId.isValid(objectId);
    }

    responseOk (resp, data) {
        resp.status(200).send({
            ok: true,
            error: null,
            data: data
        });
    }

    responseInputError (resp, error) {
        resp.status(400).send({
            ok: false,
            error: (error && error.message) || 'User Input error',
            data: null
        });
    }

    responseNotFound (resp, error) {
        resp.status(404).send({
            ok: false,
            error: (error && error.message) || 'Record not found',
            data: null
        });
    }

    responseInternalError (resp, error) {
        resp.status(500).send({
            ok: false,
            error: (error && error.message) || 'User Input error',
            data: null
        });
    }
}
