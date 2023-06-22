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

function strongEnough(earthquake, age) {
  //building strength:
  let currStrength = 1000
  for (i = 0; i < age; i++) {
    let year = (1 / 100) * currStrength;
    currStrength -= year
  }
  // EarthQuake strength
  let result = earthquake.reduce((total, innerArray) => {
    let sum = innerArray.reduce((innerTotal, num) => innerTotal + num, 0)
    return total * sum
  }, 1)
  return result <= currStrength ? "Safe!" : "Needs Reinforcement!"
}

log(strongEnough([[5, 8, 7], [3, 3, 1], [4, 1, 2]], 3))