const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode
// Parameters - clarify all possibilities for params. think of edge cases. 
//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 
//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:
//1 Break your algorithm/function into individual operations
//2 Calculate the Big O of each operation
//3 Add up the Big O of each operation together
//4 Remove the constants
//5 Find the highest order term — this will be what we consider the Big O of our algorithm/function
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

//  MY PLAN:

// save num as a string
// traverse the string by steps of k
// with each step, reassign a current variable which acts as divisor
//test it against num
// if it passes, increment a "K-beauty" variable
// return kbeauty

var selfDividingNumbers = function (left, right) {
  let answers = []
  let num = 0
  let nStr = ""
  for (i = left; i <= right; i++) {
      num = i;
      nStr = i.toString()
      if (nStr.includes("0")) {
          continue;
      }
      for (j = 0; j < nStr.length; j++) {
          if (num % Number(nStr[j]) !== 0) {
              break;
          } else if (j === nStr.length - 1) {
              answers.push(num)
          }
      }
  }
  return answers
};

console.log(selfDividingNumbers(47, 85))