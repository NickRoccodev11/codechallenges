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
var nextGreaterElement = function (nums1, nums2) {
    let ans = [],
        num2Map = {};
    for (i = 0; i < nums2.length; i++) {
        for (j = i + 1; j < nums2.length; j++) {
            if (nums2[i] < nums2[j]) {
                num2Map[nums2[i]] = nums2[j]
                break;
            }
        }
        if (!num2Map[nums2[i]]) {
            num2Map[nums2[i]] = -1
        }
    }
    for (num of nums1) {
        ans.push(num2Map[num])
    }
    return ans
};

log(nextGreaterElement([1, 3, 5,2,4], [6,5,4,3,2,1,7]), [-1, 3, -1])


//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
