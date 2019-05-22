/* eslint-disable no-console */
const express = require('express');
var sequelize = require('./models').sequelize;

const app = express();
const port = 3000;

const routes = require('./routes');
const helloRoute = require('./routes/hello');

app.use(routes);
app.use('/hello', helloRoute);




sequelize.sync().then(function() {
	app.listen(port, () => {
		console.log('The application is running on localhost:3000');
	});
});
