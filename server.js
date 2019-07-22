// Dependencies
var express = require("express");
// var path = require("path");

// Create express app instance.
var app = express();

// Set the port of our application
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});