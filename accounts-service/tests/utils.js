/* eslint-disable no-undef */
const axios = require('axios');

async function getResponseOK (url) {
    const resp = await axios.get(url)
        .then(resp => resp.data);
    expect(resp.data).not.toBeNull();
    expect(resp.ok).toBeTruthy();
    return resp;
}

async function beforeAll (done) {
    const { startServer } = require('../server.js');
    await startServer();
    done();
}

module.exports = {
    beforeAll,
    getResponseOK
};