
// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.


var greatestLetter = function (s) {

    let upper = true;
    let both = [];
    for (i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) {
        upper = true;
      } else {
        upper = false;
      }
      for (j = i + 1; j < s.length; j++) {
        if (upper) {
          if (s[j].toLowerCase() === s[j] && s[j].toUpperCase() === s[i]) {
            both.push(s[i]);
          }
        } else {
          if (s[j].toUpperCase() === s[j] && s[j].toLowerCase() === s[i]) {
            both.push(s[i].toUpperCase());
          }
        }
      }
    }
    let greatest = '';
    let charCode = 0;
    for (i = 0; i < both.length; i++) {
      if(!greatest){
        greatest = both[i];
        charCode = both[i].charCodeAt(0)
      }else if(both[i].charCodeAt(0) > charCode ){
        greatest = both[i]
        charCode = both[i].charCodeAt(0)
      }
    }
  return greatest;
  }