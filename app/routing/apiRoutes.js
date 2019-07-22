// Dependencies
var surveyData = require("../data/friends");

// Routes
module.exports = function(app) {
    
    // Sends user input to API friends list
    app.get("/api/friends", function(req, res) {
        res.json(surveyData);
    });

    // Retrieves user input from array and displays on API friends list
    app.post("/api/friends", function(req, res) {
        surveyData.push(req.body);
        res.json(true);

        
    });

};

console.log(surveyData);