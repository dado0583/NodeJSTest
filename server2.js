var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.use(bodyParser.json());
//app.use(middleware.requireAuthentication);

var todos = [{
	id: 1,
	description: 'Meet friend for lunch',
	completed: true
}, {
	id: 2,
	description: 'Buy groceries',
	completed: false
}];

app.get('/', function(req, res) {
	res.send('API route');
});

app.get('/todos', function(req, res) {
	res.json(todos);
});


app.get('/todos/outstanding', function(req, res) {
	response = {matches:[]};

	for (i=0; i<todos.length;i++){
		if (!todos[i].completed) {
			response.matches.push(todos[i]);
		}
	}

	res.json(response);
});

app.get('/todos/:id', function(req, res) {
	var id = parseInt(req.params.id);
	console.log('Requested Id:' + id);

	for (i=0; i<todos.length;i++){
		if (todos[i].id === id) {
			res.json(todos[i]);
			return;
		}
	}

	res.json({
		'response': 'Id not found',
		'id': id
	});
});

app.post('/todos/:id', function(req, res) {
	var body = req.body;
	console.log(JSON.stringify(body));

	todos.push(body);

	res.json(body);
});

app.listen(PORT, function() {
	console.log('Express server started on port '+ PORT +'!');
});