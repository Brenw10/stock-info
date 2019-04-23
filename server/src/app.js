const auth = require('./services/auth');
const express = require('express');
const app = express();

const users = require('./routes/users');
const redeem = require('./routes/redeem');

app.use(express.json());

app.use((_, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
	next();
});

app.use((req, _, next) =>
	auth.getToken()
		.then(token => req.token = token)
		.then(() => next())
);

app.use('/users', users);
app.use('/redeem', redeem);

module.exports = app;