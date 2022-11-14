const log = console.log 
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function solution(a) {
    let visitedIdx = [],
        jumps = 0,
        currIdx = 0;
    do {
        if (visitedIdx.includes(currIdx)) {
            return -1
        }
        visitedIdx.push(currIdx)
        currIdx += a[currIdx]
        jumps++
    } while (currIdx >= 0 && currIdx < a.length)
    return jumps
}

log(solution([1, 2, 2, -1]))//4
log(solution([1, -1]))// -1
log(solution([1, 1, -2, 3]))// -1
log(solution([1, 1, -3, 3]))// 3
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
