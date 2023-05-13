// given a target, only two numbers in an array will equal that target when summed, 
// return their indices as an array

//first pass
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};