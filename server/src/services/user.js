const axios = require('axios');
const { api } = require('../core/parameters');

function getUsers(token) {
  return axios
    .get(api.concat('/layouts/stock/records'), { headers: { 'Authorization': "bearer " + token } })
    .then(response => response.data.response.data);
}

function getUser(token, userId) {
  return axios
    .get(api.concat(`/layouts/stock/records/${userId}`), { headers: { 'Authorization': "bearer " + token } })
    .then(response => response.data.response.data[0]);
}

function setUser(token, userId, body) {
  return axios
    .patch(api.concat(`/layouts/stock/records/${userId}`), body, { headers: { 'Authorization': 'bearer ' + token } })
    .then(response => response.data.response.data);
}

module.exports = { getUsers, getUser, setUser };