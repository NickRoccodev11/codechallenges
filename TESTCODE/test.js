const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mergeSplitter = (array) => {
    if (array.length <= 1) {
        return array
    }
    let middle = Math.floor(array.length / 2),
        left = array.slice(0, middle),
        right = array.slice(middle)

    return mergeSort(mergeSplitter(left), mergeSplitter(right))
}


const mergeSort = (left, right) => {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return sortedArr.concat(left.slice()).concat(right.slice())
}
log(mergeSplitter([9,3,6,2,1,6,5,7,8,9,0,4,3,]))
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
