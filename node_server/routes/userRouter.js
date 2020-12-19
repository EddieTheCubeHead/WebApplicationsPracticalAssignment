let express = require("express");
let router = express.Router();

// A router for user related fetches

// Again, populated to allow testing and demonstrating the program
let users = [{
		id: 0,
		username: "Tester",
		pass: "Pass1"
	}, {
		id: 1,
		username: "User",
		pass: "Pass2"
}]

let incrementing_id = users.length;

router.post("/login", function(req, res, next) {
	const data = req.body;
	let loggingUser = users.find(user => user.username === data.username)
	if (!loggingUser) {
		res.send({state: "NO_USER"});
	} else if (loggingUser.pass === data.password) {
		console.log(loggingUser, data);
		res.send({state: "SUCCESS"});
	} else {
		res.send({state: "WRONG_PASS"})
	}
});

router.post("/create", function(req, res, next) {
	const data = req.body;
	let loggingUser = users.find(user => user.username === data.username)
	if (loggingUser) {
		res.send({state: "NAME_TAKEN"});
	} else {
		users.push({id: incrementing_id, username: data.username, pass: data.password});
		console.log(users);
		incrementing_id += 1;
		res.send({state: "SUCCESS"});
	}
});

module.exports = router;