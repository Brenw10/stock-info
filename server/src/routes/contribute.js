const express = require('express');
const userService = require('../services/user');
const contribute = require('../services/contribute');
const router = express.Router();

router.post('/:userId', async (req, res) => {
	const user = await userService.getUser(req.token, req.params.userId);
	if (!contribute.canUserContribute(user)) return res.sendStatus(500);
	const body = contribute.getContribute(user, req.body);
	return userService.setUser(req.token, user.recordId, body)
		.then(() => res.sendStatus(200))
});

module.exports = router;