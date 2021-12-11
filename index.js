const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let val = {};

app.get("/", (req, res) => {
	res.status(200).json(val);
});

app.post("/", (req, res) => {
	val = req.body.val;
	res.status(200).json({});
});

app.listen(PORT, () => console.log("App started @ port ", PORT));
