// you are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function (nums) {
    let dom = Math.max(...nums),
        half = dom / 2;
    log(dom, half)
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > half && nums[i] !== dom) {
            log(`i:${i} nums: ${nums[i]}`)
            return -1
        }
    }
    return nums.indexOf(dom)
};