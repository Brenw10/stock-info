const express = require('express');
const user = require('../services/user');
const router = express.Router();

router.get('/', (req, res) =>
	user.getUsers(req.token)
		.then(response => res.send(response))
);

module.exports = router;