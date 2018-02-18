//var http = require('http');

var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res){
  res.send('Hello World');
});

var server = app.listen(3000, function(){
  console.log('Magic is happening on port 3000');
});

exports.closeServer = function(){
  server.close();
};

//function onRequest(request, response){
//	response.writeHead(200, {'Content-Type': 'text/plain'});
//	response.write('Hello World. Testing Werker');
//	response.end();
//}

//http.createServer(onRequest).listen(8000);