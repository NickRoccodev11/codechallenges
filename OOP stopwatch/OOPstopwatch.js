let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

log(Math.floor(Math.random() * 3))

let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

function randomInPlace(arr) {
    let placeHolder;
    let random;
    for (i = 0; i < arr.length; i++) {
        random = Math.floor(Math.random() * 3)
        placeHolder = arr[i];
        arr[i] = arr[random];
        arr[random] = placeHolder;
        for (j = 0; j < arr.length; j++) {
            random = Math.floor(Math.random() * 3)
            placeHolder = arr[i][j];
            arr[i][j] = arr[i][random];
            arr[i][random] = placeHolder;
        }
    }
    return arr
}
log(randomInPlace(myGrid))











///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
