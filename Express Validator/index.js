const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());

const { body, validationResult } = require("express-validator");

// let User = [{ username: "ali", password: "ali" }];

//Simple App
// app.post("/user", (req, res) => {
// 	User.create({
// 		username: req.body.username,
// 		password: req.body.password,
// 	}).then((user) => res.json(user));
// });

// Get Started
app.post(
	"/user",
	// username must be an email
	body("username").isEmail(),
	// password must be at least 5 chars long
	body("password").isLength({ min: 5 }),
	(req, res) => {
		console.log(req.body.username);
		console.log(req.body.password);
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		User.create({
			username: req.body.username,
			password: req.body.password,
		}).then((user) => res.json(user));
	}
);

//Sanitization
app.post(
	"/comment",
	body("email").isEmail().normalizeEmail(),
	body("text").not().isEmpty().trim().escape(),
	body("notifyOnReply").toBoolean(),
	(req, res) => {
		// Handle the request somehow
	}
);

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
