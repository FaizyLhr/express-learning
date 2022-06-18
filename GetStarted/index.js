const express = require("express");
const app = express();
const port = 3000;

// Routing in express.js

// Signature: app.METHOD(PATH, HANDLER);

app.get("/", (req, res) => {
	res.send("Hello World Init");
});

app.post("/", function (req, res) {
	res.send("Got a POST request");
});

app.put("/user", function (req, res) {
	res.send("Got a PUT request at /user");
});

app.delete("/user", function (req, res) {
	res.send("Got a DELETE request at /user");
});

// static files in Express.js
// Signature: express.static(root, [options]);
app.use(express.static("public"));

app.listen(port, () => {
	console.log(`First App listening at localhost:${port}`);
});
