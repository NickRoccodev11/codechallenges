const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let num1Map = {},
        intersection = [];
    for (num of nums1) {
        if (!num1Map[num]) {
            num1Map[num] = num
        }
    }
    log(num1Map)
    for (i = 0; i < nums2.length; i++) {
        log(nums2[i] === num1Map[nums2[i]])
        log(!intersection.includes(nums2[i]))
        if(!intersection.includes(nums2[i])) {
            intersection.push(nums2[i])
        }
    }
    
    return intersection
};

log(intersection([8, 0, 3], [0, 0]))

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
