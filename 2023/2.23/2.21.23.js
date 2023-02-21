
// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"



var summaryRanges = function(nums) {
    let ranges=[];
    let start = ''
   
    for(i=0;i<nums.length; i++){
        if(start !== 0  && !start){
        start = nums[i]
        }else{
            if(nums[i-1]+1 !== nums[i]){
                if(nums[i-1] === start ){
                    ranges.push(start.toString())
                    start = nums[i]
                }else{
                    ranges.push(`${start}->${nums[i-1]}`)
                    start = nums[i]
                }
            }
        }
        if(i=== nums.length - 1  ){
            if(start === nums[i] ){
                ranges.push(start.toString())
            }else{
               ranges.push(`${start}->${nums[i]}`)
            }
        }
    } 
    return ranges
   };
  
  log(summaryRanges([0,1,2,4,5,7]))