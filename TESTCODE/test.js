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


//split string into a n array
//check if all/each val is a num. if not return 1
//sort the vals
//if we reach a val that is not in order, retunr that missing val
//to compare, start a counter at 1 and increment it at the end of each loop iteration
// if we reach the end return 0

function findMissingNumber(sequence) {
  if (sequence.length === 0){
    return 0
  }
  let numArr = sequence.split(" ")
  if (numArr.length === 0){
    return 0
  }
  let compare = 1
  for (var i = 0; i < numArr.length; i++) {
    numArr[i] = Number(numArr[i])
    if (isNaN(numArr[i])) {
      return 1
    }
  }
  numArr.sort((a, b) => (a - b))

  for (var j = 0; j < numArr.length; j++) {
    if (numArr[j] === compare) {
      compare++;
    } else {
      return compare
    }
  }
  return 0
}

console.log(findMissingNumber("1 4 2 3 7 rr"), "1")
console.log(findMissingNumber("1 4 2 3 7"), "5")
console.log(findMissingNumber("1 4 2 3"), "0")