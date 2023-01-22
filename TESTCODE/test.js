const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function isSortedAndHow(array) {
    let asc = true,
        des = true;

    for (i = 0; i < array.length; i++) {
        if (i !== array.length - 1 && array[i] > array[i + 1]) {
            asc = false
        } else if (i !== array.length - 1 && array[i] < array[i + 1]) {
            des = false
        }
    }
    if (!asc && !des) {
        return "no"
    } else if (asc) {
        return "yes, ascending"
    } else {
        return "yes, descending"
    }

}

log(isSortedAndHow([1, 2, 3, 4, 5, 6, 7]))
log(isSortedAndHow([8, 7, 6, 5, 4, 3, 2, 1]))
log(isSortedAndHow([8, 7, 6, 5, 9, 4, 3, 10]))

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
