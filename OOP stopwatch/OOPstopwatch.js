

let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function whereIBelong(arr, num) {
    arr.sort((a, b) => a - b)
    let lo = 0,
        hi = arr.length,
        midpoint;

    do {
        midpoint = Math.floor(lo + (hi - lo) / 2);
        if (arr[midpoint] <= num && arr[midpoint + 1] >= num) {
            return midpoint + 1
        } else if (arr[midpoint] >= num && arr[midpoint - 1] <= num) {
            return midpoint
        }
        else if (midpoint > num) {
            hi = midpoint
        } else {
            lo = midpoint + 1
        }
    } while (hi > lo)

}



log(whereIBelong([4, 2, 35, 3, 1, 5, 6, 7, 48, 8, 9, 83, 10, 11, 46, 12, 3, 14, 15, 16, 17, 29, 45, 67, 88, 99,], 1.4)) // should return 1 because it is greater than 1(index 0), but less than 2(index 1).






///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
