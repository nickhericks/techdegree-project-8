/* eslint-disable no-console */
const express = require('express');
var sequelize = require('./models').sequelize;

const app = express();
const port = 3000;

const routes = require('./routes');


app.use(routes);



app.get('/hello', (req, res) => {
	res.send('<h1>Hello route!</h1>');
});

sequelize.sync().then(function() {
	app.listen(port, () => {
		console.log('The application is running on localhost:3000');
	});
});
