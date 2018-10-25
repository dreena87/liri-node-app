
require("dotenv").config();

var keys = require("./keys.js");
var fs= require("fs");
var request = require("request");
var Spotify = require ("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var movieName = process.argv[3];
var liriReturn = process.argv[2];


//switch for different commands
switch (liriReturn) {
    case "spotify-this-song":
    spotifyThisSong();
    break;

    case "movie-this":
    movieThis();
    break;

    case "do-what-it-says":
    doWhatItSays();
    break;

//helpful instrustions for new users on command line 
default: console.log("\n" + "type any command after 'node liri.js': " + "\n" +
"spotify-this-song 'any song title' " + "\n" +
"movie-this 'any movie title' " + "\n" +
"do-what-it-says " + "\n" +
"Use quotes for multiword titles!");

};
function spotifyThisSong(songName) {
    var songName = process.argv[3];
    if(!songName) {
        songName = "I Want it That Way";
    };
    songRequest = songName;
    spotify.search({
        type: "track",
        query: songRequest

    },

    function (err, data) {
        if (!err) {
            var trackInfo = data.tracks.items;
            for(var i = 0; i < 5; i++){
                if (trackInfo[i] != undefined) {
                    var spotifyResults =
                    "Artist: " + trackInfo[i].artist[0].name + "\n" +
                    "song: " + trackInfo[i].name + "\n" +
                    "preview URL: " + trackInfo[i].preview_url + "\n" +
                    "Album: " + trackInfo[i].album.name + "\n"

                    console.log(spotifyResults);
                    console.log('  ');                 }
            };
        };


    });
};
