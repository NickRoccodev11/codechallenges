
let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



function repeats(arr) {
    let arrMap = {}

    for (num of arr) {
        if (!arrMap[num]) {
            arrMap[num] = 1
        } else {
            arrMap[num]++
        }
    }
    let total = 0;
    for (number of arr) {
        if (arrMap[number] === 1) {
            total += number
        }
    }
    return total

}


log(
    repeats([4, 5, 7, 5, 4, 8]),
    repeats([9, 10, 19, 13, 19, 13]),
    repeats([16, 0, 11, 4, 8, 16, 0, 11]),
    repeats([5, 17, 18, 11, 13, 18, 11, 13]),
    repeats([5, 10, 19, 13, 10, 13])
)

log('15,19,12,22,24')



///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
