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

var findClosestNumber = function (nums) {
  let currClosest = Infinity;

  for (i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i]) === Math.abs(currClosest)) {
      if (nums[i] > currClosest) {
        currClosest = nums[i];
       // log(`current:${currClosest} i: ${i} nums[i] ${nums[i]}`)
      }
    } else if (Math.abs(nums[i]) < Math.abs(currClosest)) {
      currClosest = nums[i];
     // log(`current:${currClosest} i: ${i} nums[i] ${nums[i]}`)
    }
  }
  return currClosest;
};
// log(findClosestNumber([2,-1,1]))
log(findClosestNumber([-10, -12, -54, -12, -544, -10000]))