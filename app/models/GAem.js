//grabs the packages needed 
var mongoose = require( 'mongoose'),
	Schema = mongoose.Schema,
	User = require ( './User' );

//post Schema which also includes a referecne to the User model

var GaemSchema = new Schema({
	quote: String,
	user: [User.schema],
	created_at: Date
});

//pre-hook that ensure that before each save the created at is set

GaemSchema.pre('save', function (next) {
	this.created_at = new Date();
	next();
});

module.exports = mongoose.model('Gaem', GaemSchema);