const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [1, 3, 2, 2, 5, 2, 3, 7]

// 1, 2, 2, 2, 3, 3, 5, 7

// [1, 3, 4, 5, 2, 6, 2, 7, 7, 7, 7, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2]
// let obj = {
//     1: 1,
//     2: 11,
//     3: 1,
//     5: 1,
//     6: 1,
//     7: 4,
//     8: 4,
// }



//the longest harmonious subsequence will always be the two numbers that are
// - one apart
// - most frequent

// make map with key= num;  val = frequency
// for in loop - 
// if( current element + element[this key minus one]> total){
//     total = el1 + el2
//     answer = # of el1 + # of el2
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
    let numMap= {},
    total = 0;
    for (num of nums){
        numMap[num] = numMap[num]+1 || 1
    }
    for(i=0; i<nums.length; i++){
        if(numMap[i] + numMap[i-1] > total ){
            total = numMap[i] + numMap[i-1];
        }
    }
    return total
};

log(findLHS([1,2])) // 5













//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
