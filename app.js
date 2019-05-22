/* eslint-disable no-console */
const express = require('express');
var sequelize = require('./models').sequelize;


const routes = require("./routes");
const booksRoutes = require("./routes/books");

const app = express();
const port = 3000;
app.use("/static", express.static("public"));


// View engine setup
app.set('view engine', 'pug');


app.use(routes);
app.use('/books', booksRoutes);




sequelize.sync().then(function() {
	app.listen(port, () => {
		console.log('The application is running on localhost:3000');
	});
});
