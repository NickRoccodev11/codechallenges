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

// second attemp / something wrong with the return 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numMap = {}
    for (n of nums) {
        if (!numMap[n]) {
            numMap[n] = n
        }
    }
    log(numMap)
    log(nums, "nums")
    let num = 2
    log("WHAT")

    for (num in numMap) {
        log(num, "top")
        log(target - num, "t-n")
        if (nums.includes(target - num)) {
            log("match", num, nums.indexOf(target - num))
            log(num, "and...")
            log(nums.indexOf(num))
            log(nums)
            return [nums.indexOf(target - num), nums.indexOf(num)]
        }
    }
};
log(twoSum([2, 7, 11, 15], 9))


// PROBLEM FOUND: Object keys are always strings! you are trying to return the string "2" instead of the int

// try three:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    for (i = 0; i < nums.length; i++) {
        map[i] = nums[i]
    }
    for (idx in map) {
        if (nums.includes(target - map[idx])) {
            let idx1 = parseInt(idx)
            let idx2 = nums.indexOf(target - map[idx])
            if (idx1 !== idx2) {
                return [idx1, idx2]
            }
        }
    }

};