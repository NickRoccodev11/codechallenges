
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let hi = nums.length,
        lo = 0,
        mid = 0;
    while (hi>lo){
        mid = Math.floor(lo + (hi - lo) / 2 )
        if(nums[mid] === target){
            return mid
        }else if (nums[mid] > target ){
            hi = mid ;
        }else{
            lo = mid+1
        }
    }
    return -1 
};