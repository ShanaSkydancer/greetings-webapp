'use strict';

const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const app = express();
const $ = require("jquery");
const selectedLang = require("./selectedLang");
// const history = require("./history");
// const theCounter = require("./counter");

// const historyRoutes = HistoryRoutes();
// const nameRoutes = NameRouted();

//'public' is the folder that styling, fonts, images are in
app.use(express.static(__dirname + '/public'));
// app.set('public', __dirname + '/public');
//'views' is the folder where my layouts are in
app.use(express.static(__dirname + '/views'));
// app.set('views', __dirname + '/views');
//'routes' is where my specific handlebar templates and js functions are
app.use(express.static(__dirname + '/routes'));
// app.set('routes', __dirname + '/routes');
//Use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : false
}));

//session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//Use flash for error messages
app.use(flash());


// Use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Using "/" makes it the "index page" ie it has no route
app.get('/greetings', function(req, res) {
    res.render("index");
  });
// app.get('/greetings', nameRoutes.index);
// app.get('/greetings/history', historyRoutes.history);
// app.post('/greetings/history', historyRoutes.history);

//Use debugger with node-inspector
//Used it at the beginning of my code but it can go anywhere or I can create a break in the inspector
debugger;

var usersNameList = {};
var counter = 0;

//User enters the name
//Render my {{name}} data from the handlebars template
//Displays my full greeting from mt selectedLang and outputs the name in {{greeting}}
//Also allows user to select a language
app.post('/greetings', function(req, res){
  var usersNameList = {};
  var usersName = req.body.usersName;
  // usersNameList.push(usersName);
  var times = 0;
  // console.log(usersName);
  var radioVal = req.body.radioButt;
  // console.log(radioVal);
  var greeting = selectedLang(radioVal, usersName);
  // var nameData = {greeting : greeting};
  var nameData = {greeting : greeting, times: times};
  // console.log(greeting);
  res.render("index", nameData);
});

// app.get('/counter', function(req, res){
//   usersNameList.distinct("usersName", function(names){
//    var nameCount = ""
//    if(usersNameList.length === undefined){
//
//      nameCount = {times: 0};
//    } else {
//      nameCount = {times: usersNameList.length};
//    };
//    console.log(nameCount);
//    res.render("counter", nameCount);
//  });
// });

//Hosts my server
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Greetings webapp listening at http://%s:%s', host, port);
});
