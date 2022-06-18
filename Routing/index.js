const express = require("express");
const app = express();
const router = express.Router();

// Basic Route
// respond with "hello world" when a GET request is made to the homepage
app.get(
	"/",
	(req, res, next) => {
		console.log("Hello");
		// next("route");
		next();

		res.send("Applied");
	},
	(req, res) => {
		console.log("Hello");
	}
);

// Route Methods

// app.use() Method to specify middleware as the callback function

// valid for all app.METHOD()
app.all(
	"/secret",
	(req, res, next) => {
		console.log("Accessing the secret section ...");
		next(); // pass control to the next handler
	},
	(req, res) => {
		res.send("Finished");
	}
);

// app.route()  create chainable route handlers for a route path
// Multiple Mehtods under same request
app
	.route("/book")
	.get(function (req, res) {
		res.send("Get a random book");
	})
	.post(function (req, res) {
		res.send("Add a book");
	})
	.put(function (req, res) {
		res.send("Update the book");
	});

// express.Router
// creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log("Time: ", Date.now());
	next();
});
// define the home page route
router.get("/", function (req, res) {
	res.send("Birds home page");
});
// define the about route
router.get("/about", function (req, res) {
	res.send("About birds");
});

app.use("/birds", router); //sub route of original route

app.use("/*", (req, res) => {
	res.send("404 PAge");
});

app.listen(3000, () => {
	console.log("App is listening");
});
