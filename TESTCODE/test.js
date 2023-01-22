const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////



function setReducer(input) {
    if (input.length <= 1) {
        return input[0]
    }
    let reducedArr = [],
        count = 1
    for (i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++
        } else {
            reducedArr.push(count)
            count = 1;
        }
    }
    return setReducer(reducedArr)
}

log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7])) // 2

// 1 1 1 3 2 1
// 3 1 1 1
// 1 3
// 1 1
// 2

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
