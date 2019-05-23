/* eslint-disable no-console */
const express = require('express');
var sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');

// Import routes
const routes = require('./routes');
const booksRoutes = require('./routes/books');

const app = express();
const port = 3000;

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files in public folder
app.use('/static', express.static('public'));


// View engine setup
app.set('view engine', 'pug');

// Routes
app.use(routes);
app.use('/books', booksRoutes);








// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	if(err.status === 404) {
		// console.error(`Error: ${err.status} - ${err.message}`);
	}
	if(err.status === 404) {
		res.render('page-not-found');
	} else {
		res.render('error');
	}
});




sequelize.sync().then(function() {
	app.listen(port, () => {
		console.log('The application is running on localhost:3000');
	});
});
