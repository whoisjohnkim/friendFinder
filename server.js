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
        picture: "https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg",
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
        picture: "http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_koala02%20copy.jpg",
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

app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    var match = 0;
    var difference = 0;
    var smallestDiff = 100;
    // Find friend with the smallest difference in scores
    for(var i = 0; i < friends.length; i++){
        difference = 0;
        for(var j = 0; j < newFriend.scores.length; j++){
            difference += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
        }
        if(difference < smallestDiff){
            match = i;
        }
    }
    // Return the best match
    friends.push(newFriend);
    res.json(friends[match]);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });