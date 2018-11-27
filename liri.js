require("dotenv").config();

var fs = require('fs');

fs.readFile('random.txt', 'utf8', function(err, data){
//if (err){
   // return console.log(err);
//}
//console.log(data);
});

// function random(opt1, opt2){
//     if (opt1 === 'spotify-this-song'){

//     }
        
// }

var axios = require('axios');


var spotify = require("keys.js"); 
spotify = Spotify(keys.spotify);
//var action = process.argv[2];
var song = process.argv[3];
song = song.replace(" " , "%20");

songUrl () {
    axios.get("https:api.spotify.com/v1/artists/" + song + spotify).then(response => {
        console.log(response);
        })};

// $.ajax({
//     url: songUrl,
//     method: "GET"
// }).then(function(response){
// (JSON.stringify(response))
// });
$

var argument = process.argv[2];
var movieName = process.argv[3];
movieName = movieName.replace(" ", "%20");
function movie(movieName){
    var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(movieUrl).then(function(response){
        console.log(response.data);
    });
};

function movies(opt1, opt2){
    //console.log(opt1);
    //console.log(opt2);
    if (opt1 === 'movie-this'){
        movie(opt2);
    }
}
movies(argument, movieName);

var argument1 = process.argv[2];
var artist = process.argv[3];
artist = artist.replace(" ",  "%20");

 function bands(artist){
    var artistUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(artistUrl).then(function(response){
        console.log(response.data);
        //console.log("Venue Name: " + response.data.VenueData.properties.name);
       //console.log("Venue City: " + response.VenueData.properties.city);
      // console.log("Event Date and Time: " + response.EventData.properties.datetime);
    });
 }

function artists(opt1, opt2){
   // console.log(opt1);
   // console.log(opt2);
    if (opt1 === 'concert-this'){
        bands(opt2);
    }
}
artists(argument1, artist);
 



