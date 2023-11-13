// You are given a 0-indexed integer array nums having length n, an integer indexDifference, and an integer valueDifference.

// Your task is to find two indices i and j, both in the range [0, n - 1], that satisfy the following conditions:

// abs(i - j) >= indexDifference, and
// abs(nums[i] - nums[j]) >= valueDifference
// Return an integer array answer, where answer = [i, j] if there are two such indices, and answer = [-1, -1] otherwise. If there are multiple choices for the two indices, return any of them.

// Note: i and j may be equal.


var findIndices = function (nums, indexDifference, valueDifference) {
    for (i = 0; i < nums.length; i++) {
        if (i + indexDifference < nums.length) { //changed
            for (j = i + indexDifference; j < nums.length; j++) { //changed
                if (Math.abs(nums[i] - nums[j]) >= valueDifference) {
                    return [i, j]
                }
            }
        }
    }
    return [-1, -1]
};

//IMPROVED! because the index difference must be a certain amount, we created a conditional to stop iterating if i is such that there is not enough indeces left for j to satisfy the indexDIfference. we also changed j to initialize with that difference in mind, which cuts down on the number of iterations considerably.