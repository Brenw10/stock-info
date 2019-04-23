const express = require('express');
const redeem = require('../services/redeem');
const router = express.Router();

router.post('/:userId', (req, res) =>
	redeem.setRedeem(req.token, req.params.userId, req.body)
		.then(() => res.sendStatus(200))
		.catch(() => res.sendStatus(500))
);

module.exports = router;