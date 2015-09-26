var User = require("../models/User")

function index(req, res){
	User.find(function(err,users){
		if (err) {
			res.send(err)
		}
		res.json(users)
	})
}

function create(req, res){
	// make a new, empty user
	var user = new User();
	// set the empty user's name, username and password --
	// to the name, username, and password that are in the --
	// request's body
	user.name = req.body.name
	user.email = req.body.email
	user.cohort = req.body.cohort
	user.password = req.body.password

	// try to save this new user to the db
	user.save(function(err){
		// if there's an error, send back a response with an error message
		if (err) {
			res.send(err)
		}
		// if there's not an error, tell them they successfully created a new user
		res.json({message: "new user created!"})
	})
}


function show(req,res){
	User.findById(req.params.user_id, function(err, user){
		if(err) res.send(err)
		res.json(user)
	})
}

function update(req, res){
	// grab the user from the database
	User.findById(req.params.user_id, function(err, user){
		// if there's an error, tell the user
		if(err) {
			res.send(err)
		}
		// if the payload has a name, set the found user's name to be equal to it
		if(req.body.name){
			user.name = req.body.name
		}
		// do the same with the username
		if(req.body.email){
			user.email = req.body.email
		}
		// do the same with the cohort
		if(req.body.cohort){
			user.cohort = req.body.cohort
		}
		// ..and with the password
		if(req.body.password){
			user.password = req.body.password
		}
		// now we've changed the found user, we must remember to save it back to the DB!
		user.save(function(err){
			if(err){
				res.send(err)
			}
			res.json({message: "user updated"})
		})
	})
}

function destroy(req, res){
	// delete the user with the id in the url
	User.remove({_id: req.params.user_id}, function(err, user){
		// tell the user if there is an error
		if(err){
			res.send(err)
		}
		// else, send a success message
		res.json({message: "deleted"})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}




