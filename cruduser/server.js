// console.log("Node Merged");

const express = require("express");
// var bodyParser = require("body-parser");
// const Joi = require("joi");
const app = express();
app.use(express.json());
const port = process.env.port || 3000;

const users = [
	{ id: 1, name: "faizy", sex: "male" },
	{ id: 2, name: "ali", sex: "male" },
	{ id: 3, name: "noraiz", sex: "male" },
	{ id: 4, name: "faiza", sex: "female" },
	{ id: 5, name: "noshi", sex: "female" },
];

// const data=[{"ali"}]

app.get("/", (req, res) => {
	res.send(users);
});

app.post("/add", function (req, res) {
	// const schema = {
	// 	name: Joi.string().min(3).required(),
	// 	sex: Joi.string().min(3).required(),
	// };

	// const result = Joi.validate(req.body, schema);
	// if (result.error) {
	// 	result.status(400).send(result.error);
	// }

	let newdata = {
		id: users.length + 1,
		name: req.body.name || "Not Entered",
		sex: req.body.sex || "Not Entered",
	};
	users.push(newdata);
	res.send(newdata);

	// let data =
	// res.send("Got a POST request");
	// let newdata = JSON.stringify(req.body);
	// let newdata2 = JSON.stringify(res.body);
	// console.log(newdata);
	// console.log(newdata2);
	// res.send(newdata);
	// res.send(newdata2);

	// let newdata = req.body;
	// console.log(newdata);
	// res.send(newdata);
});

// update a game
app.put("/update/:id", (req, res) => {
	// console.log(req.params);
	// console.log(g.name);
	// console.log(g.sex);
	// console.log(req.params.name);
	// console.log(req.params.sex);
	const data = users.find((g) => g.id === parseInt(req.params.id));

	let x = data.id;
	// console.log(x);

	users.forEach((e) => {
		if (e.id === x) {
			e.name = req.body.name;
			e.sex = req.body.sex;
		}
	});

	if (!data) {
		return res.status(404).send("The data with the given ID was not found.");
	}
	// console.log(data);

	// const data = users.find((g) => g.id == req.params.id);

	// const schema = {
	// 	title: Joi.string().min(2).required(),
	// };

	// const result = Joi.validate(req.body, schema);
	// if (result.error) {
	// 	res.status(400).send(result.error);
	// }
	// console.log(req.body.name);
	// console.log(req.body.sex);
	// console.log(users.name);
	// console.log(users.sex);

	res.send(users);
});

app.delete("/deluser/:id", (req, res) => {
	const data = users.find((g) => g.id === parseInt(req.params.id));
	if (!data) {
		return res.status(404).send("The data with the given ID was not found.");
	}

	const index = users.indexOf(data);
	users.splice(index, 1);

	res.send(users);
});

app.listen(port, () => {
	console.log(`App is Listenig on port ${port}`);
});
