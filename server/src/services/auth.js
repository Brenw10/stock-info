const axios = require('axios');
const { api, auth } = require('../core/parameters');

function getToken() {
	return axios
		.post(api.concat('/sessions'), {}, { auth })
		.then(response => response.data.response.token);
}

module.exports = { getToken };