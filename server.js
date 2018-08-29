// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/survey", function(req, res){

});