
let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var pivotIndex = function (nums) {
    for (i = 0; i < nums.length; i++) {
        if (i === 0) {
            if (nums.slice(1).reduce((a, b) => a + b) === 0) {
                return 0
            }
        } else {
            if (nums.slice(i + 1).reduce((a, b) => a + b, 0) === nums.slice(0, i).reduce((a, b) => a + b, 0)) {
                return i
            }

        }
    }
    return -1
}
log(pivotIndex([0, 0, 0]))
log(pivotIndex([1, 7, 3, 6, 5, 6])) //3
log(pivotIndex([1, 2, 3])) //-1




///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
