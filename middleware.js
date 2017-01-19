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

module.exports = middleware;