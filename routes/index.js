const achievements = require("./achievements");
const quiz = require("./quiz");
const mainscreen = require("./mainscreen");
const tutorial = require("./tutorial");
const path = require("path");

const constructorMethod = app =>{
    app.use("/", mainscreen);
	app.use("/achievements", achievements);
    app.use("/quiz", quiz);
    app.use("/tutorial.js", tutorial);
	
	app.use("*", (req,res) => {
		 res.sendStatus(404);
	});
}
module.exports = constructorMethod;