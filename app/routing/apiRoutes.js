// Dependencies
var surveyAnswers = require("../data/friends");

// Routes
module.exports = function(app) {
    
    // Sends user to API friends list
    app.get("/api/friends", function(req, res) {
        res.json(userAnswers);
      });

};

console.log(surveyAnswers);