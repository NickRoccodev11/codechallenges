// You are given a 0-indexed array nums of integers.

// A triplet of indices (i, j, k) is a mountain if:

// i < j < k
// nums[i] < nums[j] and nums[k] < nums[j]
// Return the minimum possible sum of a mountain triplet of nums. If no such triplet exists, return -1.
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let sums = -1;
    for(i=0;i<nums.length - 2;i++){
        for(j=i+1;j<nums.length - 1;j++){
            for(k=j+1; k < nums.length; k++){
                if(nums[i] < nums[j] && nums[k] < nums[j]){
                    if(sums === -1){
                        sums = nums[i]+nums[j]+nums[k]
                    }else if(nums[i]+nums[j]+nums[k] < sums){
                         sums = nums[i]+nums[j]+nums[k]
                    }
                }
            }
        }
     }
     return sums
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let sums = -1;
    for(i=0;i<nums.length - 2;i++){
        for(j=i+1;j<nums.length - 1;j++){
            for(k=j+1; k < nums.length; k++){
                if(nums[i] < nums[j] && nums[k] < nums[j]){
                    if(sums === -1){
                        sums = nums[i]+nums[j]+nums[k]
                    }else if(nums[i]+nums[j]+nums[k] < sums){
                         sums = nums[i]+nums[j]+nums[k]
                    }
                }
            }
        }
     }
     return sums
};