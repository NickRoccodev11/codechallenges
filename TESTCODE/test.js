const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 
// 
//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap= {}
    for (n of nums){
        if(!numMap[n]){
            numMap[n] = n
        }
    }
  log(numMap)
  log(nums, "nums")
  log(nums.indexOf(2))

    for(num in numMap){
        log(num, "top")
        log(target - num, "t-n")
        if(nums.includes(target - num)){
        log("match", num, nums.indexOf(target-num))
        log(num, "and...")
        log(nums.indexOf(num))
        log(nums)
          return [nums.indexOf(target - num), nums.indexOf(num)]
        }
    }
  };
log(twoSum([2,7,11,15],9))
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
