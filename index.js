const express = require('express');
const app = express();

let data = [
	{
		id: 1,
		content: 'test1',
		date: '2022-01-10T17:30:31.098Z'
	},
	{
		id: 2,
		content: 'test2',
		date: '2022-01-10T18:39:34.091Z'
	},	
	{
		id: 3,
		content: 'test3',
		date: '2022-01-10T19:20:14.298Z'
	}
];

app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

app.get('/api/notes', (req, res) => {
	res.json(data);
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});