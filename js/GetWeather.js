var http = require('http');
var location = "Fukuoka-shi,jp";
var units = 'metric';
var APIKEY = "{9d50df53ff80f789c405eb8fc44b522e}";
var URL = 'http://api.openweathermap.org/data/2.5/weather?q='+ location +'&units='+ units +'&appid='+ APIKEY;
http.get(URL, function(res) {
  var body = '';
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('data', function(chunk) {
    res = JSON.parse(body);
    console.log(res);
  });
}).on('error', function(e) {
  console.log(e.message);
});