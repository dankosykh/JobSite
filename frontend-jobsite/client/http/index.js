import axios from 'axios';

const options = {
  headers: { 'Access-Control-Allow-Origin': '*' },
};

const URL = 'http://localhost:3001/';

const get = (endpoint, params) => (
  new Promise((resolve, reject) => {
    if (params) {
      axios.get(`${URL}${endpoint}`, params, options)
        .then((response) => resolve(response.data))
        .catch((err) => reject(err));
    } else {
      axios.get(`${URL}${endpoint}`, options)
        .then((response) => resolve(response.data))
        .catch((err) => reject(err));
    }
  })
);

const post = (endpoint, params) => (
  new Promise((resolve, reject) => {
    axios.post(`${URL}${endpoint}`, params, options)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  })
);

const patchField = (endpoint, params) => (
  new Promise((resolve, reject) => {
    axios.patch(`${URL}${endpoint}`, params, options)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  })
);

const deleteField = (endpoint, params) => (
  new Promise((resolve, reject) => {
    axios.delete(`${URL}${endpoint}`, params, options)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  })
);

export {
  get,
  post,
  patchField,
  deleteField,
};
