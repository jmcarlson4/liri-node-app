require("dotenv").config();
var axios = require('axios');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var entireStringArg = process.argv;

function commands(command, title) {
    switch (command) {
        case 'movie-this':
            movie(title);
            break;
        case 'concert-this':
            bands(title);
            break;
        case 'spotify-this-song':
            music(title);
            break;
        case 'Do-what-it-says':
            doWhatItSays();
            break;

    }
};


var argument = process.argv[2];
var song = "";
//song = song.replace(" ", "%20");

for (var i = 3;  i < entireStringArg.length; i++){
    song = song + " " + entireStringArg[i];
};
console.log(song);

commands(argument, song);

function music(song) {
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(song);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[0].preview_url);
        console.log(JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
    });


};


function doWhatItSays() {
    var fs = require("fs");

    fs.readFile("random.txt", "utf8", function (err, data) {

        if (err) {
            return console.log(err);
        }
        console.log(data);
    });
};



function movie(movieName) {
    var movieName = song;
    movieName = movieName.replace(" ", "%20");
    var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(movieUrl).then(function (response) {
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.imdbRating);
        console.log(response.data.Ratings[1].Value);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);
    });
};





function bands(artist) {
    // var artist = process.argv.slice(3).join(" ");
    var artist = song;
    artist = artist.replace(" ", "%20");
    var artistUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(artistUrl).then(function (response) {
        console.log(response.data[0].venue.name);
        console.log(response.data[0].venue.city);
        console.log(response.data[0].datetime);
    });
};



