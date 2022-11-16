const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You need to create a function that when provided with a triplet, 
// returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// constant time solution
const gimme = (trip) => {
    if (trip[0] > trip[1] && trip[0] < trip[2] ||
        trip[0] < trip[1] && trip[0] > trip[2]) {
        return 0
    } else if (trip[1] > trip[0] && trip[1] < trip[2] ||
        trip[1] < trip[0] && trip[1] > trip[2]) {
        return 1
    } else {
        return 2
    }
}

//because this problem will only ever involve 3 numbers, here is a cleaner but slower solution

const gimme2 = (trip) => {
    let compare = [...trip],
        sorted = trip.sort((a, b) => a - b)
    return compare.indexOf(sorted[1])
}


log(gimme([2, 3, 1])) //0
log(gimme([5, 10, 14])) //1
log(gimme([75, -2, 14])) //2




//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
