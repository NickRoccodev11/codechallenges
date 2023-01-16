// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let curSub = '',
        longest = 0;
    for (i = 0; i < s.length; i++) {
        for (j = i; j < s.length; j++) {
            if (!curSub.includes(s[j])) {
                curSub += s[j];
            } else {
                if (curSub.length > longest) {
                    longest = curSub.length;
                    curSub = '';
                    break;
                } else {
                    curSub = ''
                    break;
                }
            }
        }
    }
    return longest > curSub.length ? longest : curSub.length
};

// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// the loop:

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number;){
      newArray.push(counter);
    }
    
    return newArray;
  }
  // the fix: it had no expression step for the loop

  function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }

