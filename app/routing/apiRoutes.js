// Dependencies
var userAnswers = require("../data/friends");

// Routes
module.exports = function(app) {
    
    // Sends user input to API friends list
    app.get("/api/friends", function(req, res) {
        res.json(userAnswers);
    });

    // Retrieves user input from array and displays on API friends list
    app.post("/api/tables", function(req, res) {
        userAnswers.push(req.body);
        res.json(true);
    });

};

console.log(userAnswers);