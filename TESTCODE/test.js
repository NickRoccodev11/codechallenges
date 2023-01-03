const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
 var intersection = function(nums) {
    if(nums.length === 1){
        return nums[0].sort((a,b)=> a-b)
    }
     let commons = {} 
    nums[0].forEach(el=> nums[1].includes(el) ? commons[el] = true : false  )
    // log(commons)

    for(i=2; i< nums.length; i++){
        for(number in commons){
            if (!nums[i].includes(number.toString()) ){
                delete commons[number]
                log(commons)
            }
        }
    }
       return  Object.keys(commons).sort((a,b)=> a-b)
  };

  log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))









//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
