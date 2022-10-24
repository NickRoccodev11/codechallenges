// return a runnning sum given an array of numbers

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: 
// [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function (nums) {
    let sumArr = []
    let total = 0;
    for (i = 0; i <= nums.length; i++) {
        for (j = 0; j < i; j++) {
            total += nums[j]
        }
        if (i !== 0) {
            sumArr.push(total)
        }
        total = 0
    }
    return sumArr
};


// log(runningSum([34, -13, 12, -59, 27, -63, 1, 94, 84, 54, 9, 57, 53, 11, 85, -17, -78, -85, -84, 5, 43, -44, -48, -38]))
