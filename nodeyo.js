var app = {};

app.init = function() {
	console.log('init\'d');
};

app.log = function(input) {
	console.log(input);
};

exports.init = app.init;
exports.log = app.log;

