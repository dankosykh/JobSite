const resume = require('../../../server/routes/resume.js');
const server = require('../../../server/server.js');
const { test1, test2, test3, test4 } = require('../../MOCK_DATA.js');
const axios = require('axios');

const postResume = (params) => {
  axios.post('/api/resume', params)
}


