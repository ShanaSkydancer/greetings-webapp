module.exports = function() {
  const usersNameList = [];
  const history = function(req, res){
      var usersName = req.body.usersName;
      var foundName = usersNameList.find(function(currentName){
          return currentName === usersName;
      });

      if (!usersName){
        req.flash('error', 'Name should not be blank');
      } else {
            if (!foundName){
              usersNameList.push(usersName);
            } else {
              req.flash('error', 'Name has already been greeted!')
            }
        res.redirect('/greetings');
    };

    return history;
};

// app.get('/history', function(req, res){
//   var userNameList = [];
//   var usersName = req.body.usersName;
//   userNameList.push(usersName);
//   res.render("history",userNameList);
//   res.redirect('/greetings');
// });
