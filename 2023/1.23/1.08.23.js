




// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxK = function(nums) {
    let greatest = -1
    for(i=0; i<nums.length; i++){
         if( nums[i] > greatest && nums.includes(-nums[i]) ){
             greatest = nums[i]
         }
     }
     return greatest
 };