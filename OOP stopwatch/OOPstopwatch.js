
let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var runningSum = function (nums) {
    let sumArr = []
    let total = 0;
    for (i = 0; i <= nums.length; i++) {
        for (j = 0; j < i; j++) {
            total += nums[j]
        }
        if (i !== 0) {
            sumArr.push(total)
        }
        total = 0
    }
    return sumArr
};


log(runningSum([34, -13, 12, -59, 27, -63, 1, 94, 84, 54, 9, 57, 53, 11, 85, -17, -78, -85, -84, 5, 43, -44, -48, -38]))




///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
