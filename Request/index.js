const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = 3000;

app.get("/", function (req, res) {
	res.send("Hello User");
});

app.get("/user/:id", function (req, res) {
	res.send("user " + req.params.id);
});

// properties

// req.app
{
	//importing module file
	app.get("/viewdirectory", require("./midware.js"));
}

// req.baseUrl
{
	const faizy = express.Router();

	faizy.get("/jp", function (req, res) {
		console.log(req.baseUrl); // /greet
		res.send("Faizy!");
	});

	app.use("/faizy", faizy); // load the router on '/greet'
}

// req.body
{
	app.post("/profile", function (req, res) {
		console.log(req.body);
		res.json(req.body);
	});
}

app.listen(port, () => {
	console.log(`App is listening on port: ${port}`);
});
