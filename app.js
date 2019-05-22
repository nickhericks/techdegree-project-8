/* eslint-disable no-console */
const express = require('express');
var sequelize = require('./models').sequelize;

const app = express();
const port = 3000;

const routes = require('./routes');
const booksRoutes = require('./routes/books');

app.use(routes);
app.use('/books', booksRoutes);




sequelize.sync().then(function() {
	app.listen(port, () => {
		console.log('The application is running on localhost:3000');
	});
});
