const express = require("express");
const router = express.Router();

// A router for message-related fetches

// This is already populated to provide test cases and content to demonstrate
// the functionality of the program
let msgs = [{owner: "Tester", content: "Test content", id: 0},
		   {owner: "User", content: "More test content", id: 1},
		   {owner: "Tester", content: "Even more test content", id: 2}];
		   
		   
let incrementing_id = msgs.length; // Dynamic to allow populating array with test messages

router.get("/", function(req, res, next) {
	console.log("fetch");
	outMsgs = Array.from(msgs);
	outMsgs.reverse()
	res.send({msgs: outMsgs, success: true});
});

router.post("/add", function(req, res, next) {
	const data = req.body;
	msgs.push({owner: data.user, content: data.content, id: incrementing_id});
	incrementing_id += 1; // Python ftw
	outMsgs = Array.from(msgs);
	outMsgs.reverse()
	res.send({msgs: outMsgs, success: true})
});

router.delete("/del", function(req, res, next) {
	
	outMsgs = Array.from(msgs);
	const filtered = outMsgs.filter( msg => msg.id !== req.body.msg_id )
	if (filtered.length === msgs.length) {
		outMsgs = Array.from(msgs);
		outMsgs.reverse()
		res.send({msgs: outMsgs, success: false})
	} else {
		msgs = Array.from(filtered);
		res.send({msgs: filtered.reverse(), success: true})
	}
});

module.exports = router;