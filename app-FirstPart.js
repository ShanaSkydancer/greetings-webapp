'use strict';

var express = require('express');
var app = express();

//Use debugger with node-inspector
//Used it at the beginning of my code but it can go anywhere or I can create a break in the inspector
debugger;

var usersGreeted = {}

//Adding a name to my list, if they name is there already then just increase the amount by one
app.get('/greetings/:name', function(req, res) {
  var name = req.params.name;
  if (usersGreeted[name]){
    usersGreeted[name]++;
  } else {
    usersGreeted[name] = 1;
  }
  res.send("Hello, " + name + "!");
});

//Will display all the names that are greeted
//I push only thr name into an array so that it only displays the name and not the number
app.get('/greeted', function(req, res) {
  var namesGreeted = [];
  for (let name in usersGreeted){
    namesGreeted.push(name);
  }
  res.send("Users greeted: " + namesGreeted);
});

//Gives the name and amount of times greeted
//Shows the amount by giving it the "name" key
app.get('/counter/:name', function(req, res) {
  var name = req.params.name;
  res.send("Hello " + name + " has been greeted " + usersGreeted[name] + " times!");
});

//Hosts my server
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Greetings webapp listening at http://%s:%s', host, port);
});
