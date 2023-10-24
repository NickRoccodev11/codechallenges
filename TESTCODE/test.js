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

// 1  0  0  0  0  0  0  1
// 0  1  0  0  0  0  1  0
// 0  0  1  0  0  1  0  0
// 0  0  0  1  1  0  0  0
// 0  0  0  1  1  0  0  0
// 0  0  1  0  0  1  0  0
// 0  1  0  0  0  0  1  0
// 1  0  0  0  0  0  0  1

// to keep track:
// start= 0
// finish = grid.length-1
// loop inside a loop (i, j)
// as you iterate, if it's not start or finish, it must be zero
// at the end of each j loop:
//start++, finish--; 

var checkXMatrix = function (grid) {
  let start = 0;
  let end = grid.length - 1;

  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      if (j === start || j === end) {
        if (grid[i][j] === 0) {
          return false;
        }
      } else {
        if (grid[i][j] !== 0) {
          return false;
        }
      }
    }
    start++;
    end--;
  }
  return true;
};