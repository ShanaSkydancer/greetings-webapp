module.exports = function(usersNameList, usersName, counter){
  if(usersNameList[usersName]){
    usersNameList[usersName]++;
  } else {
    usersNameList[usersName] = 1;
    counter++;
  };
    // res.render("index", namesCounter);
};
