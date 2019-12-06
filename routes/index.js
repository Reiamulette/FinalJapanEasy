const achievements = require("./achievements");
const quiz = require("./quiz");
const mainscreen = require("./mainscreen");
const tutorial = require("./tutorial");
const path = require("path");

const constructorMethod = app =>{
	app.get("/", (req, res) => {
		res.sendFile(path.resolve("static/index.html"));
	});
	app.use("/achievements", achievements);
    app.use("/quiz", quiz);
    app.use("/mainscreen", mainscreen);
    app.use("/tutorial.js", tutorial);
	
	app.use("*", (req,res) => {
		 res.sendStatus(404);
	});
}
module.exports = constructorMethod;