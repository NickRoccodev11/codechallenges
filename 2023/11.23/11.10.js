/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                if (Math.abs(i - j) <= k) {
                    return true
                }
            }
        }
    }
    return false
};

// possibly correct, but there are arays in the test that are too long for this solution. you must improve upon the nested loop!

// still slow, but if you know the difference can only be k or less, do this:
var containsNearbyDuplicate = function (nums, k) {
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i + 1; j < i + 1 + k; j++) { // notice the stop condition!
            if (nums[i] === nums[j]) {
                if (Math.abs(i - j) <= k) {
                    return true
                }
            }
        }
    }
    return false
};