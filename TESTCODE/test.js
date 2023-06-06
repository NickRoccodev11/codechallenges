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

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= sum(nums[i].length) <= 1000
// 1 <= nums[i][j] <= 1000
// All the values of nums[i] are unique.

//copy the first inner array values
//compare them to the second, for any val not included in 2nd arr, splice it out
//continue for all arrays
// sort the remaining vals 

var intersection = function (nums) {
  let comp = [...nums[0]]
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < comp.length; j++) {
      if (!nums[i].includes(comp[j])) {
       comp.splice(j, 1);
       j--;
        // console.log(`i:${i} j:${j} comp: ${comp}`)
        if (comp.length === 0) {
          return []
        }
      }
    }
  }
  return comp.sort((a, b) => a - b)
};

console.log(intersection([[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]))