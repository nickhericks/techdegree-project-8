const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('<h1>I love Treehouse!</h1>');
});

app.get('/hello', (req, res) => {
	res.send('<h1>Hello route!</h1>');
});

app.listen(port, () => {
	console.log('The application is running on localhost:3000');
});

