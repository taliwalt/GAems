/* global __dirname */
//	BASE SET UP
//	===========
var express = require( 'express' ), //requires express 
	app = express(), //defines the app is using express
	bodyParser = require( 'body-parser' ), // grabs the body of a req
	morgan = require( 'morgan' ), // for help with logging issues
	mongoose = require('mongoose'); //requires mongoose

var User = require('./app/models/User.js'),
	GAem = require('./app/models/GAem.js');

var apiRouter = require('./app/config/routes.js');
var port = 8080;
//	DB
//	==
mongoose.connect('mongodb://localhost/GAems')

//	APP CONFIG
//	==========
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan( 'dev' ))

//	ROUTES
//	======
//testing api routes
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});


app.use('/api', apiRouter)
// apiRouter.get('/', function (req, res) {
// 	res.send('API Homebase');
// });

//	USER ROUTES
//	----------
// app.route('/users')
// 	.get(function (req, res) {
// 		res.json({ message: "This is where the users will show up" });
// 	});

//	GAEMS ROUTES
//	------------
// app.route('/gaems')
// 	.get(function (req, res) {
// 		res.json({ message: "This is where the gaems will show up" })
// 	});

//	SERVER
//	======
app.listen(port)
console.log("The server is running on" + port);
