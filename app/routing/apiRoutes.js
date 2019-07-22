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

        var newPerson = req.body.options;
        var newPersonInt = [];
        for (var i = 0; i < newPerson.length; i++) {
            newPersonInt.push(parseInt(newPerson[i]));
        }
        console.log(newPersonInt);

        // var allPerson = [];
        var allPersonInt = [];
        for (var i = 0; i < surveyData.length - 1; i++) {
            console.log(surveyData[i].options);
            // allPerson.push(surveyData[i].options)
            // console.log(allPerson);
            for (var j = 0; j < surveyData[i].options.length; j++) {
                allPersonInt.push(parseInt(surveyData[i].options[j]));
            }
        }
        console.log(allPersonInt);
        console.log(surveyData.length);
    });

};

// console.log(surveyData);