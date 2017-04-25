'use strict';

var express = require('express');
var app = express();
var usersGreeted = [];

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/greetings/:name', function(req, res) {
  var name = req.params.name;
  console.log(name);
  usersGreeted.push(name);
  res.send("Hello, " + name + "!");
});

app.get('/greeted', function(req, res) {
  res.send("Users greeted: " + usersGreeted);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Greetings webapp listening at http://%s:%s', host, port);
});
