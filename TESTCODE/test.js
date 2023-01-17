const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let largest = 0,
    sizeMap = {};
    for (i = 0; i < height.length; i++) {
        for (j = 0; j < height.length; j++) {
            let compare = `${Math.min(i, j)}x${Math.max(i, j)}`
            if (i === j || sizeMap[compare]) {
                continue;
            } else if (Math.min(height[i], height[j]) * Math.abs(i - j) > largest) {
                largest = Math.min(height[i], height[j]) * Math.abs(i - j)
                let name = `${Math.min(i, j)}x${Math.max(i, j)}`
                sizeMap[name] = Math.min(height[i], height[j]) * Math.abs(i - j)
            } else {
                let name = `${Math.min(i, j)}x${Math.max(i, j)}`
                sizeMap[name] = Math.min(height[i], height[j]) * Math.abs(i - j)
            }
        }
    }
log(sizeMap)
return largest
};


log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))






//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
