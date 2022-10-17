

let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function arrayFilter(arr, func) {
//     let answer;
//     arr.forEach(el => {
//         if (!answer && func(el)) {
//             answer = el
//         }
//     });
//     return answer
// }

// arr = [1,3, 6, 2, 3, 4, 5, 7]
// let func = el => el % 3 === 0
// log(arrayFilter(arr, func))
function arrayFilter(arr, func) {
    let answer;
    for (i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i]

        }
        log(arr[i])
    }
    return false
}

arr = [1, 2, 4, 3, 5, 7]
let func = el => el % 3 === 0
log(arrayFilter(arr, func))


///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
