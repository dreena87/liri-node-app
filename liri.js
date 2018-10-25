
require("dotenv").config();

var keys = require("./keys.js");
var fs= require("fs");
var request = require("request");
var spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
