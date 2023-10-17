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


//determine length of string and if its greater than k
//push sliced chunks into new array
// convert to numbers, sum them, and then join it all back to a string to check for length


var digitSum = function (s, k) {
  if (s.length <= k) {
    return s
  } else {
    let arr = []
    for (i = 0; i < s.length; i += k) {
      arr.push(s.slice(i, i + k))
    }
    let sum = 0
    let sumArr = []
    for (i = 0; i < arr.length; i++) {
      for (j = 0; j < arr[i].length; j++) {
        sum += Number(arr[i][j])
      }
      sumArr.push(sum)
      sum = 0;
    }
    s = sumArr.join("")
  }
  return digitSum(s,k)
};

console.log(digitSum("11111222223", 3))