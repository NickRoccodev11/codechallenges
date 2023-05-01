const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 
// 
//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const mostLikely = (prob1,prob2) => (parseInt(prob1[0]) / parseInt(prob1[2]) ) > (parseInt(prob2[0])  / parseInt(prob2[2]) )
function mostLikely(prob1, prob2) {
    let arr1 = prob1.split(":"),
        arr2 = prob2.split(":"),
        frac1 = Number(arr1[0] / arr1[1]),
        frac2 = Number(arr2[0] / arr2[1])
        log(frac1)
        log(frac2)
    return frac1 > frac2

}

log(mostLikely("1:3", "1:2"))

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
