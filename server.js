// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var Friends = require("./app/data/friends");

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

var friend = new Friends();
var friend1 =
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
    };
var friend2 =
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
    };

friend.addFriend(friend1);
friend.addFriend(friend2);


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
    // var output = friends.returnFriends();
    return res.json(friend.returnFriends());
});

app.post("/api/friends", function(req, res){
    var newFriend = req.body;

    // Return the best match
    res.json(friend.getMatch(newFriend));

});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });