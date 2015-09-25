//grabs the packages needed 
var mongoose = require( 'mongoose'),
	Schema = mongoose.Schema,
	User = require ( './user' );

//post Schema which also includes a referecne to the User model

var GaemSchema = new Gaem({
	quote: 	String,
	user: 	[ User.schema ],
	created_at: Date
}) 

//pre-hook that ensure that before each save the created at is set

GaemSchema.pre( 'save', function(next){
	this.created_at = new Date();
	next();
}):

module.exportd = mongoose.model('Gaem', GaemSchema);