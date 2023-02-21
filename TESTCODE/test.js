const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var summaryRanges = function(nums) {
  let ranges=[];
  let start = ''
 
  for(i=0;i<nums.length; i++){
      if(start !== 0  && !start){
      start = nums[i]
      }else{
          if(nums[i-1]+1 !== nums[i]){
              if(nums[i-1] === start ){
                  ranges.push(start)
                  start = nums[i]
              }else{
                  ranges.push(`${start}->${nums[i-1]}`)
                  start = nums[i]
              }
          }
      }
      if(i=== nums.length - 1  ){
          if(start === nums[i] ){
              ranges.push(start)
          }else{
             ranges.push(`${start}->${nums[i]}`)
          }
      }
  } 
  return ranges
 };

log(summaryRanges([0,1,2,4,5,7]))


//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
