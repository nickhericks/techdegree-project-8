# Project 8 - Full Stack JavaScript Techdegree

### SQL Library Manager (built with Sequelize)
A web application that tracks library books, built using the SQL ORM Sequelize.

---

<!-- <img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1555084799/portfolio/expressPortfolio.png" width="899px"> -->

## View project
1. Download this repo.
2. Navigate to the project directory in the command line/terminal.
3. Run 'npm install' (or view the required dependencies listed in the package.json file and install each manually).
3. Run 'npm start' to view the project in your browser at:  localhost:3000

<!-- :mag: Live version available at [nickhericks.github.io/techdegree-project-6/](https://nickhericks.github.io/techdegree-project-6/) -->

## Project objective
In this project, I was given HTML designs and an existing SQLite database. I was required to implement a dynamic website using JavaScript, Node.js, Express, Pug, and the SQL ORM Sequelize.

The application includes pages to list, add, update, and delete books from an SQLite database.

<!-- 
In this project, a JSON file is used to store all the data about the earlier techdegree projects that I've built. Pug uses the JSON data and templates to generate the markup that is ultimately displayed in the browser.

Node.js and Express are used to import the required dependencies, link the JSON with the Pug templates, set up routes to handle requests, set up the middleware to utilize static files like CSS, handle errors, and set up a server to serve the project. -->

## Techniques and tools
- Sequelize
- SQLite database
- Node.js
- Express.js
- Pug template engine

<!-- ## Additional features

In addition to completing the basic requirements for this techdegree project, I also added additional features including:

- [x] Updating package.json file to allow running 'npm start' to run the app
- [x] Create custom error message Pug template
- [x] Updating CSS stylings (background, font, colors, box shadows, etc.) -->


## Code example
Using the Book object to access the Sequelize book.js model, along with the Sequelize `.findByPk()` method to retrieve the book data we're looking for.

```javascript
/* GET individual book */
router.get('/:id', (req, res) => {
	Book.findByPk(req.params.id)
		.then(function(book) {
			if(book) {
				res.render('update-book', { book: book, title: book.title });
			} else {
				res.render('error');
			}
		})
		.catch(function(err) {
			res.render('error');
		});
});
```

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:

Also, a big thank you to the creators and maintainers of [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), and [Pug](https://www.npmjs.com/package/pug). 👍