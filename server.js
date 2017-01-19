var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route hint');
		console.log(req.method);
		console.log(req.query);

		if(req.query.id === 'dave'){
			next();
		} else {
			res.send('Unauthorized');
		}
	}
};

app.use(middleware.requireAuthentication);

app.get('/', function(req, res) {
	res.send('Hello Express');
});

app.get('/about', function(req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started on port '+ PORT +'!');
});