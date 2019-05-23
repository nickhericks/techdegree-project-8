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


// This middleware runs if no routes above match what was requested.
// Meaning it grabs all 404 errors and passes them to the
// error handling middleware below
app.use((req, res, next) => {
	const err = new Error('Not found');
	err.status = 404;
	next(err);
});

// Error Handling Middleware (4 parameters)
// Runs if an object gets passed into a next() call
app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	if(err.status === 404) {
		res.render('page-not-found');
	} else {
		res.render('error');
	}
});

// 
sequelize.sync().then(function() {
	app.listen(port, () => {
		console.log('The application is running on localhost:3000');
	});
});
