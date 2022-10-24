
let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an array of digital numbers, return a new array of length number containing the 
// last even numbers from the original array (in the same order).
//  The original array will be not empty and will contain at least "number" even numbers.

// // For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


const lastEvens = (arr, n) => {
    return arr.filter(el=> el% 2 ===0 ).slice(-n)
}

log(lastEvens([1, 2, 3, 4, 5, 6, 7, 8, 9],3)) //4,6,8
log(lastEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)) // [-8,26]
log(lastEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)) // [6]




///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
