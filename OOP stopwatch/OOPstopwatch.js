

let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rangeSum([lo, hi]) {
    let range = []
    for (i = lo; i <= hi; i++) {
        range.push(i)
    }
    return range.reduce((a, b) => a + b)
}

// gauss sum with a range that doesn't start at one

function rangeSum2([lo, hi]) {
    return (lo + hi) * (hi - lo + 1) / 2
}



log(rangeSum2([1, 5]))






///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
