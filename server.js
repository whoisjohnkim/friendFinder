// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Friends (DATA)
// Start with initial default friend options
// =============================================================
var friends = [
    {
        name: "John Kim",
        picture: "",
        scores: [
            1,
            3,
            2,
            5,
            3,
            2,
            1,
            2,
            3,
            4
        ]
    },
    {
        name: "Sean Angle",
        picture: "",
        scores: [
            3,
            2,
            4,
            3,
            2,
            4,
            3,
            2,
            1,
            4
        ]
    }
];


// Routes
// =============================================================

// Basic routes that send the user first to the AJAX page
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/api/friends", function(req, res){
    return res.json(friends);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });