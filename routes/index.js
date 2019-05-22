const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	// redirect to /books route
	res.redirect('/books');
});

module.exports = router;