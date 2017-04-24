'use strict';

var express = require('express');
var app = express();

// create a route
app.get('/greetings/:id', function(req, res){
  console.log(req.params.id);
  res.send("Hello, " + req.params.id + "!");
});

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});