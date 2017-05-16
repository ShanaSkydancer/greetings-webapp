module.exports = function(languageVal, usersName){
  switch (languageVal) {
    case 'english':
      return "Hello, " + usersName;
      break;
    case 'afrikaans':
      return "Goeie dag, " + usersName;
      break;
    case 'xhosa':
      return "Mholweni, " + usersName;
      break;
    // default:
    // return "No language selected!";
  };
};
