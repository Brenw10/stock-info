const express = require('express');
const redeem = require('../services/redeem');
const userService = require('../services/user');
const router = express.Router();

router.post('/:userId', async (req, res) => {
	const user = await userService.getUser(req.token, req.params.userId);
	if (!redeem.canUserRedeem(user)) return res.sendStatus(500);
	const body = redeem.getRedeem(user, req.body);
	return redeem.setRedeem(req.token, user.recordId, body).then(() => res.sendStatus(200));
});

module.exports = router;