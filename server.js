//	BASE SET UP
//	===========
var express = require( 'express' ), //requires express 
	app = express(), //defines the app is using express
	bodyParser = require( 'body-parser' ), // grabs the body of a req
	morgan = require( 'morgan' ), // for help with logging issues
	mongoose = require( 'mongoose' ); //requires mongoose


//	APP CONFIG
//	==========
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan( 'dev' ))

//	DB
//	==
mongoose.connect('localhost:27017/GAems')

//	ROUTES
//	======
var apiRouter = express.Router(); //create a router for our api
app.use( 'api', apiRouter)


//	SERVER
//	======
app.listen(8080)
console.log("The server is running on 8080")
