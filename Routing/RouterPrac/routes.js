const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
	console.log("Pre Funchion");
	next();
});

router.get("/", (req, res) => {
	console.log("Faizy Home Page");
	res.send("Faizy Home Page");
});

router.get("/family", (req, res) => {
	console.log("Faizy Family Page");
	res.send("Faizy Family Page");
});

router.get("/friends", (req, res) => {
	console.log("Faizy Friends Page");
	res.send("Faizy Friends Page");
});

module.exports = router;
