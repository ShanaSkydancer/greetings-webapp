module.exports = function(usersNameList, usersName, counter){
  if(usersNameList[usersName]){
    usersNameList[usersName]++;
  } else {
    usersNameList[usersName] = 1;
    counter++;
  };
    res.render("times", namesCounter);
};

// app.get('/counter', function(req, res){
//   var times = 0;
//   counter++;
//   res.render("counter", namesCounter);
//   res.redirect("/index");
// });

// app.get('/counter', function(req, res){
//   var usersNameList = {};
//   var usersName = req.body.usersName;
//   usersNameList.push(usersName);
//   usersNameList.distinct("usersName", function(names){
//    var nameCount = ""
//    if(usersNameList.length === undefined){
//      nameCount = {times: 0};
//    } else {
//      nameCount = {times: usersNameList.length};
//    };
//    console.log(nameCount);
//    res.render("counter", nameCount);
//  });
// });
