// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.



// fist answer, poor performance
var pivotIndex = function (nums) {
    for (i = 0; i < nums.length; i++) {
        if (i === 0) {
            if (nums.slice(1).reduce((a, b) => a + b) === 0) {
                return 0
            }
        } else {
            if (nums.slice(i + 1).reduce((a, b) => a + b, 0) === nums.slice(0, i).reduce((a, b) => a + b, 0)) {
                return i
            }
        }
    }
    return -1
}

// without reduce and slice // way better time complexity

var pivotIndex = function (nums) {
    let totalSum = 0;
    for (number of nums) {
        totalSum += number
    }
    let leftSum = 0

    for (i = 0; i < nums.length; i++) {
       
        if (leftSum * 2 === totalSum - nums[i]) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
}

// Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr){
    return arr.concat(arr)
}

log(duplicate([1,2,3]))