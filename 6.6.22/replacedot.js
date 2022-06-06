
// The code provided is supposed replace all the dots .
//  in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.


// the original:

// var replaceDots = function(str) {
//     return str.replace(/./, '-');
//   }


//first solution :
function replaceDots(str) {
    return str.replaceAll(".", "-");
}


//variation
var replaceDots = function (str) {
    let noDots = "";
    for (i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        noDots += "-";
      } else {
        noDots += str[i];
      }
    }
    return noDots
  }

