const express = require("express");
const app = express();

const port = 3000;

const passport = require("passport"),
	LocalStrategy = require("passport-local").Strategy;

passport.use(
	new LocalStrategy(function (username, password, done) {
		User.findOne({ username: username }, function (err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false, { message: "Incorrect username." });
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: "Incorrect password." });
			}
			return done(null, user);
		});
	})
);

app.get("/", (req, res) => {
	console.log("Get Request");
	res.send("Get Called");
});

app.post(
	"/login",
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login",
		failureFlash: true,
	})
);

app.listen(port, () => {
	console.log(`server is listening at ${port}`);
});
