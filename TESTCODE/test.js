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
// 2=12
//01 02 11 12 22
// 3= 30
//01 02 11 12 22 / 03 13 23 33 // additional 18
// 4= 60
//01 02 11 12 22 03 13 23 33 04 14 24 34 44 // additional 30
// 5 =105
//01 02 11 12 22 03 13 23 33 04 14 24 34 44 05 15 25 35 45 55 // additional 45
//  every number up to n, plus n * (n+1) // 6 should be 168
// 01 02 11 12 22 03 13 23 33 04 14 24 34 44 05 15 25 35 45 55 06 16 26 36 46 56 66
function dotsOnDominoBones(n) {
  if (n === 2) {
    return 12
  }
  let total = 12;
  let counter = 2;
  while (true) {
    counter++;
    for (i = 1; i <= counter; i++) {
      total += i
    }
    total += counter * (counter + 1)
    if (counter === n) {
      return total
    }
  }
}