

let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function chunkArray(arr, num) {
    let answer = [];
    let arrIsPushed = false
    do {
        if (arr.length > num) {
            answer.push(arr.slice(0, num));
            arr = arr.slice(num)
        } else {
            answer.push(arr.slice(0, arr.length));
            arrIsPushed = true;
        }
    } while (!arrIsPushed)
    return answer
}

log(chunkArray(arr, 5), "[[1,2,3,4,5][6,7,8,9,10][11,12,13]]")
log(chunkArray([1, 2, 3, 4], 5), "[[1,2,3,4]]")
log(chunkArray([1, 2, 3, 4, 5, 6], 2), "[[1,2][3,4][5,6]]")




///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
