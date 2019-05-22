const express = require('express');
const router = express.Router();

var Book = require('../models').Book;


/* GET articles listing. */
router.get('/', (req, res) => {
	Book.findAll({ order: [['title']] })
		.then(function(books){
			res.render('index', { 
				books: books,
				title: 'Books'
			});
		});
});



/* Create a new book form. */
router.get('/new', (req, res) => {
	res.render('new-book', {book: Book.build(), title: 'New Book'});
});


/* POST create book. */
router.post('/new', (req, res) => {
	Book.create(req.body)
		.then(function() {
			res.redirect('/');
			console.dir(req.body);
		})
		.catch(function(err){
			if(err.name === 'SequelizeValidationError'){
				res.render('new-book', {
					book: Book.build(req.body),
					title: 'New Book',
					errors: err.errors
				});
			} else {
				throw err;
			}
		})
		.catch(function(err) {
			res.sendStatus(500);
		});
});


/* GET individual book. */
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


/* POST update book. */
router.post('/:id', (req, res) => {
	Book.findByPk(req.params.id)
		.then(function(book) {
			if (book) {
				return book.update(req.body);
			} else {
				res.sendStatus(404);
			}
		})
		.then(function(book) {
			res.redirect('/');
		})
		.catch(function(err) {
			if (err.name === 'SequelizeValidationError') {
				const book = Book.build(req.body);
				book.id = req.params.id;

				res.render('update-book', {
					book: book,
					title: 'Update Book',
					errors: err.errors
				});
			} else {
				throw err;
			}
		})
		.catch(function(err) {
			res.render("error");
		});
});



/* POST delete individual book. */
router.post('/:id/delete', (req, res) => {
	Book.findByPk(req.params.id)
		.then(function(book) {
			if(book) {
				return book.destroy();
			} else {
				res.sendStatus(404);
			}
		})
		.then(function(book) {
			res.redirect('/books');
		})
		.catch(function(err) {
			res.sendStatus(500);
		});
});










module.exports = router;
