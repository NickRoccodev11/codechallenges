

let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let answer = []
function chunkArray(arr, num) {
    if (arr <= 0) {
        return answer;
    } else {
        answer.push(arr.slice(0, num));
        return chunkArray(arr.slice(num),num)

    }
}
let bob = [1,2,3,4]
log(bob.slice(5))

// // log(chunkArray(arr, 5), "[[1,2,3,4,5][6,7,8,9,10][11,12,13]]")
// log(chunkArray([1, 2, 3, 4], 5), "[[1,2,3,4]]")
log(chunkArray([1, 2, 3, 4, 5, 6], 2), "[[1,2][3,4][5,6]]")

///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
