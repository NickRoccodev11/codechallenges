
//Only two numbers in the array add up to the target.
// you cannot use the same number twice
//return the indeces of the two numbers
//inputs=> array, target(num)
//output => array with length 2 

//quadratic solution

var twoSum = function (nums, target) {

    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};


// hashmap solution - linear time/storage


var twoSum = function (nums, target) {
    const sumMap = {}
    for (i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (sumMap[target - num] !== undefined) {
            return [sumMap[target - num], i]
        } else {
            sumMap[num] = i
        }
    }
};