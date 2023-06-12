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


// if the first instance  is succeeded by a larger number, remove the first.
// if you make it to the end and you have not removed any numbers, remove the last instance
// iterate through string looking for digit
//if you get a match, compare it to the next digit using parseInt() 
//if (digit is greater than nextnum) continue
// else if (digit is smaller than nextnum) slice string up until digit, 
// concatenate the rest after digit onto a new var
//return var



var removeDigit = function (number, digit) {
  let newNum = ""
  for (i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      if (Number(number[i + 1]) > Number(digit)) {
        if (number.indexOf(number[i]) === 0) {
          return number.slice(1)
        } else {
          newNum = number.slice(0, i)
          newNum += number.slice(i+1)
          return newNum
        }
      }
    }
  }
  newNum = number.slice(0, number.lastIndexOf(digit))
  // console.log(newNum)
  newNum += number.slice(number.lastIndexOf(digit) + 1)
  // console.log(newNum)
  return newNum
};

console.log(removeDigit("133235", "3"))
