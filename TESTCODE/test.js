const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Given an array of numbers, return all pairs that add up to a given sum. 
// The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });


const twoSum = (arr, num) => {
    let numMap = {}
    let pairs = []
    for (i = 0; i < arr.length; i++) {
        numMap[i] = arr[i]
    }
    for (digit in numMap) {
        if (arr.indexOf(num - numMap[digit]) !== -1 &&
            arr.indexOf(num - numMap[digit]) !== digit) {
            pairs.push([numMap[digit], numMap[digit] - num])
        }
    }
    return pairs
}

log(twoSum([1,2,2,3,4], 4))
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
