const express = require('express');
const app = express();

const users = require('./routes/users');

app.use((_, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	// Disabling SSL certificate verify
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
	next();
});

app.use('/users', users);

module.exports = app;