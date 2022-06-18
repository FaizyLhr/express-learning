const express = require("express");
const app = express();
const port = 3000;

const router = express.Router();

// app level middlewares

// will not work if funchion keyword is not provided
// app.get((req, res, next) => {
// 	// res.send("checked");
// 	console.log("Checking Middle Wae");
// 	next();
// });

// calls every time when any request calls
app.use(function (req, res, next) {
	console.log("Time:", Date.now());
	next();
});

app.get("/", (req, res) => {
	console.log("home call");
	res.send("checked");
});

// // MiddleWare
// app.get(
// 	"/users",
// 	(req, res, next) => {
// 		console.log("first");
// 		// next("route");
// 		next();
// 	},
// 	(req, res, next) => {
// 		console.log("second");
// 		next();
// 	},
// 	(req, res, next) => {
// 		console.log("last");
// 		res.send("checkedpara");
// 	}
// );

// app.get("/users", (req, res) => {
// 	res.send("Secondroot");
// });

// Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

// a middleware function with no mount path. This code is executed for every request to the router
// router.use(function (req, res, next) {
// 	console.log("Time:", Date.now());
// 	next();
// });

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
// router.use(
// 	"/user/:id",
// 	function (req, res, next) {
// 		console.log("Request URL:", req.originalUrl);
// 		next();
// 	},
// 	function (req, res, next) {
// 		console.log("Request Type:", req.method);
// 		next();
// 	}
// );

// a middleware sub-stack that handles GET requests to the /user/:id path
// router.get(
// 	"/user/:id",
// 	function (req, res, next) {
// 		// if the user ID is 0, skip to the next router
// 		if (req.params.id === "0") next("route");
// 		// otherwise pass control to the next middleware function in this stack
// 		else next();
// 	},
// 	function (req, res) {
// 		// render a regular page
// 		// res.render("regular");
// 		console.log("runned");

// 		res.send("regular");
// 	}
// );

// // handler for the /user/:id path, which renders a special page
// router.get("/user/:id", function (req, res, next) {
// 	console.log(req.params.id);
// 	res.render("special");
// });

// mount the router on the app
// app.use("/", router);

// Error Handling MiddleWare

// Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next)):

// app.use(function (err, req, res, next) {
// 	console.error(err.stack);
// 	res.status(500).send("Something broke!");
// });

// Built-in middleware
// 1.express.static (serves static assets such as HTML files, images, and so on).
// 2.express.json (parses incoming requests with JSON payloads)
// 3.express.urlencoded (parses incoming requests with URL-encoded payloads)

// Third Party MiddleWare

// var cookieParser = require("cookie-parser");

// // load the cookie-parsing middleware
// app.use(cookieParser());
// app.listen(port, () => {
// 	console.log(`server is running on port ${port}`);
// });
