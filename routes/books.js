const express = require('express');
const router = express.Router();

var Book = require('../models').Book;





router.get('/', (req, res) => {
	res.send('<h1>books route</h1>');
});

module.exports = router;
