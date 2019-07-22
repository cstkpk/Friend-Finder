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

        // var newPerson = req.body.options;
        // var newPersonInt = [];
        // for (var i = 0; i < newPerson.length; i++) {
        //     newPersonInt.push(parseInt(newPerson[i]));
        // }
        // console.log(newPersonInt);

        // // var allPerson = [];
        // var allPersonInt = [];
        // for (var i = 0; i < surveyData.length - 1; i++) {
        //     console.log(surveyData[i].options);
        //     // allPerson.push(surveyData[i].options)
        //     // console.log(allPerson);
        //     for (var j = 0; j < surveyData[i].options.length; j++) {
        //         // allPersonInt.push(parseInt(surveyData[i].options[j]));
        //         console.log(parseInt(surveyData[i].options[j]));
        //     }
        // }
        // console.log(allPersonInt);
        console.log(surveyData.length);


        var newPerson = req.body.options;
        var matchFriend;
        var matchPhoto;
        
        var diffArr = [];
        for (var i = 0; i < surveyData.length - 1; i++) {
            var difference = 0;
            for (var j = 0; j < newPerson.length; j++) {
                difference += Math.abs(surveyData[i].options[j] - newPerson[j]);
            }
            
            console.log(difference);
            diffArr.push(difference)
        }
        console.log(diffArr);
        console.log(Math.min(...diffArr));
        var matchNum = diffArr.indexOf(Math.min(...diffArr));
        console.log(matchNum);
        matchFriend = surveyData[matchNum].name;
        matchPhoto = surveyData[matchNum].photo
        console.log(matchFriend);
        console.log(matchPhoto);

    });

};