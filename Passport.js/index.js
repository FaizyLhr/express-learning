const express = require("express");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const port = 3000;

app.get("/", (req, res) => {
	console.log("Get Request");
	res.send("Get Called");
});

// Methods

// Redirecting
// app.post(
// 	"/login",
// 	passport.authenticate("local", {
// 		successRedirect: "/",
// 		failureRedirect: "/login",
// 	})
// );

// Authentication MiddleWare
// app.post("/login", passport.authenticate("local"), function (req, res) {
// 	// If this function gets called, authentication was successful.
// 	// `req.user` contains the authenticated user.
// 	res.redirect("/users/" + req.user.username);
// });

// Flash Messages
// app.post(
// 	"/login",
// 	passport.authenticate("local", {
// 		successRedirect: "/",
// 		failureRedirect: "/login",
// 		failureFlash: true, // instructs Passport to flash an error message using the message given by the strategy's verify callback
// 	})
// );

// Disable Sessions
// app.get(
// 	"/api/users/me",
// 	passport.authenticate("basic", { session: false }),
// 	function (req, res) {
// 		res.json({ id: req.user.id, username: req.user.username });
// 	}
// );

// Custom Callback
// app.get("/login", function (req, res, next) {
// 	passport.authenticate("local", function (err, user, info) {
// 		if (err) {
// 			return next(err);
// 		}
// 		if (!user) {
// 			return res.redirect("/login");
// 		}
// 		req.logIn(user, function (err) {
// 			if (err) {
// 				return next(err);
// 			}
// 			return res.redirect("/users/" + user.username);
// 		});
// 	})(req, res, next);
// });

// Configuration

// Local Strategy Definition
// const LocalStrategy = require("passport-local").Strategy;

// passport.use(
// 	new LocalStrategy(function (username, password, done) {
// 		User.findOne({ username: username }, function (err, user) {
// 			if (err) {
// 				return done(err);
// 			}
// 			if (!user) {
// 				return done(null, false, { message: "Incorrect username." });
// 				// done: (error: any, user?: any, options?: IVerifyOptions)
// 			}
// 			if (!user.validPassword(password)) {
// 				return done(null, false, { message: "Incorrect password." });
// 			}
// 			return done(null, user);
// 		});
// 	})
// );

// Sessions

// passport.serializeUser(function (user, done) {
// 	done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
// 	User.findById(id, function (err, user) {
// 		done(err, user);
// 	});
// });

// UserNAme and Password

// passport.use(
// 	new LocalStrategy(function (username, password, done) {
// 		User.findOne({ username: username }, function (err, user) {
// 			if (err) {
// 				return done(err);
// 			}
// 			if (!user) {
// 				return done(null, false, { message: "Incorrect username." });
// 			}
// 			if (!user.validPassword(password)) {
// 				return done(null, false, { message: "Incorrect password." });
// 			}
// 			return done(null, user);
// 		});
// 	})
// );

// for manual params
// passport.use(
// 	new LocalStrategy(
// 		{
// 			usernameField: "email",
// 			passwordField: "passwd",
// 		},
// 		function (username, password, done) {
// 			User.findOne({ username: username }, function (err, user) {
// 				if (err) {
// 					return done(err);
// 				}
// 				if (!user) {
// 					return done(null, false, { message: "Incorrect username." });
// 				}
// 				if (!user.validPassword(password)) {
// 					return done(null, false, { message: "Incorrect password." });
// 				}
// 				return done(null, user);
// 			});
// 		}
// 	)
// );

app.listen(port, () => {
	console.log(`server is listening at ${port}`);
});
