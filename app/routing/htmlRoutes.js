// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

    // Sends user to the home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Sends user to the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Sends user to the home page, even if they write a non-defined parameter after the url
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};