const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const bubbleSort = (array) => {
    let switched;
    for (i = 0; i < array.length; i++) {
        switched = false;
        for (j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let switcher = array[j];
                array[j] = array[j + 1],
                    array[j + 1] = switcher
                switched = true
            }
        }
        if (!switched) {
            return array
        }
    }
    return array
}

log(bubbleSort([9, 6, 2, 4, 2, 7, 1, 8, 5, 3,100,95,-6]))


//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
