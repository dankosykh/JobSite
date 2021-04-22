/* eslint-disable no-undef */
const Utils = require('./utils');
const data = require('./users.json');

const { getResponseOK } = Utils;

const baseUrl = 'http://localhost:4001/api/users';

beforeAll(Utils.beforeAll);

test('list users', async () => {
    const resp = await getResponseOK(baseUrl);
    expect(Array.isArray(resp.data)).toBeTruthy();
});

test('get user details', async () => {
    const user1 = data[0];

    const resp = await getResponseOK(`${baseUrl}/${user1.id}`);

    expect(resp.data.id).toEqual(user1.id);
    expect(resp.data.password).toBeUndefined();
});
