const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	res.send('<h1>I love Treehouse!</h1>');
});


module.exports = router;