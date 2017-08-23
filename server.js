var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var challenge = require("./challenge")();
// console.log(challenge);

app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.render('index');
});

app.post('/multiply', function(request, response) {
	var result = challenge.multiply(request.body.int1, request.body.int2);
	console.log(result);
});

app.listen(8000, function() {
	console.log("listening on port 8000");
});