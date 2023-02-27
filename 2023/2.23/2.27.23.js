
// 448. Find All Numbers Disappeared in an Array
// Easy
// 8.2K
// 428
// Companies
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let max = nums.length
    missing = [];

    for(var i = 1; i <= max; i++  ){
        if( !nums.includes(i)){
            missing.push(i)
        }
    }
    return missing
};