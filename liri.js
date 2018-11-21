require("dotenv").config();

var fs = require('fs');
fs.readFile('random.txt', 'utf8', function(err, data){

});
var axios = require('axios');
var spotify = require("node-spotify-api"); 
var movieName = process.argv[2];
var artist = process.argv[3];
var song = process.argv[4];
var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
var artistUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(movieUrl).then(function(response){
    console.log(response.data);
});

axios.get(artistUrl).then(function(response){
    console.log(response.data);
})

