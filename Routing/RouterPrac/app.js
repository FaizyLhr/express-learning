const express = require("express");
const app = express();

const faizyroutes = require("./routes.js");

app.get("/", (req, res) => {
	res.send("App Home");
});

app.use("/faizy", faizyroutes);

app.listen(3000, () => {
	console.log("App is listening");
});
