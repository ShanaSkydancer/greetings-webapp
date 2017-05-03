'use strict';

var express = require('express');
// var webpage = require('./greetings.css');
var app = express();
// app.use(express.static(__dirname + 'public'));
//'public' is the folder that styling, fonts, images and anything else should be in

debugger;

var usersGreeted = {}

// app.get('/greetings/:name', function(req, res) {
//   var name = req.params.name;
//   console.log(name);
//   usersGreeted.push(name);
//   res.send("Hello, " + name + "!");
// });

app.get('/greetings/:name', function(req, res) {
  var name = req.params.name;
  if (usersGreeted[name]){
    usersGreeted[name]++;
  } else {
    usersGreeted[name] = 1;
  }
  res.send("Hello, " + name + "!");
});

app.get('/greeted', function(req, res) {
  var namesGreeted = [];
  for (let name in usersGreeted){
    namesGreeted.push(name);
  }
  res.send("Users greeted: " + namesGreeted);
});

app.get('/counter/:name', function(req, res) {
  var name = req.params.name;
  res.send("Hello " + name + " has been greeted " + usersGreeted[name] + " times!");
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Greetings webapp listening at http://%s:%s', host, port);
});
