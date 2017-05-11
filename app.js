'use strict';

var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')
var app = express();
//Create path to join
// var path = require('path')
//'public' is the folder that styling, fonts, images are in
app.use(express.static(__dirname + '/public'));
// app.set('public', __dirname + '/public');
//'views' is the folder where my layouts are in
app.use(express.static(__dirname + '/views'));
// app.set('views', __dirname + '/views');
//'routes' is where my specific handlebar templates are
app.use(express.static(__dirname + '/routes'));
// app.set('routes', __dirname + '/routes');
//Use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


// Use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Using "/" makes it the "home page" ie it has no route
app.get('/greetings', function(req, res) {
    res.render("home");
  });

//Use debugger with node-inspector
//Used it at the beginning of my code but it can go anywhere or I can create a break in the inspector
debugger;

//User enters the name
//Render my {{name}} data from the handlebars template
app.post('/greetings', function(req, res){
  var usersName = req.body.usersName;
  var namedata = {name : usersName};
  res.render('home', namedata);
});

//User selects a radio button
app.post('/greetings', function(req, res){
  var selectedButt = req.body.radioButt;
    $('#id').prop("checked")
    req.body.name_of_input
  });

//Hosts my server
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Greetings webapp listening at http://%s:%s', host, port);
});
