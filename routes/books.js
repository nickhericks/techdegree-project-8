const express = require('express');
const router = express.Router();

var Book = require('../models').Book;





router.get('/', function(req, res, next) {
	Book.findAll()
		.then(function(books){
			res.render('index', { books: books, title: 'Books' });
		});
});














module.exports = router;
