const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
    let degree = 0,
        numMap= {},
        dNums= [];
        for (number of nums){
            numMap[number] = numMap[number] + 1 || 1
             numMap[number] > degree ? degree = numMap[number] : null
        }
        for( number in numMap){
            if (numMap[number] === degree){
                dNums.push(parseInt(number))
            }
        }
        log(nums)
        log(dNums)
        log(nums.lastIndexOf(dNums[1]))
        let ssa = 50001
    for(i=0;i<dNums.length;i++){
        log(`num: ${dNums[i]}   sa: ${nums.lastIndexOf(dNums[i]) - nums.indexOf(dNums[i])} ssa: ${ssa} `)
        if(nums.lastIndexOf(dNums[i]) - nums.indexOf(dNums[i]) < ssa){
            ssa = nums.lastIndexOf(dNums[i]) - nums.indexOf(dNums[i])
        }
    }
    return ssa + 1
};

log(findShortestSubArray([1,2,2,3,1]))





//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
