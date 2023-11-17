// you are given a 0-indexed integer array nums and an integer k. Your task is to perform the following operation exactly k times in order to maximize your score:

// Select an element m from nums.
// Remove the selected element m from the array.
// Add a new element with a value of m + 1 to the array.
// Increase your score by m.
// Return the maximum score you can achieve after performing the operation exactly k times.

// run a math.max on nums to find the largest num
//create a sum var
// loop over largest, iterate k times
//each time, add largest to sum, then largest++
//return sum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let largest = Math.max(...nums)
    let sum = 0;
    for (var i = 1; i <= k; i++) {
        sum += largest;
        largest++;
    }
    return sum
};