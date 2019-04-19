const express = require('express');
const auth = require('../services/auth');
const user = require('../services/user');
const router = express.Router();

router.get('/', (_, res) =>
	auth.getToken()
		.then(token => user.getUsers(token))
		.then(response => res.send(response))
);

module.exports = router;