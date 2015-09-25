//grabs packages we need
var mongoose = require( 'mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require( 'bcrypt-nodejs' );

//doing the set up for the user schema

var UserSchema = new Schema({
	name: String,
	email: {type: String, require: true, index: {unique: true}},
	cohort: String,
	password: {type: String, require, true, select: false }
})

//checks to do before saving a new User

UserSchema.pre( 'save', function(next)){
	var user = this;
	//if user pw is neither modified nor new
	if(!user.isModified('password')){
		return next();
	}
	//if user pw is created or changed
	bcrypt.hash(user.password, null, null, function(err, hash)) {
		if(err){
			return next(err)
		}
		user.password = hash;
		next();
	})
})

//exports the module
module.exports = mongoose.model('User', UserSchema)