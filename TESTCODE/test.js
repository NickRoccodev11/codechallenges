let log = console.log
/////////////////////////////////////////////////////////////////////////
//nested loops i and j
// j=i
// two conditions:
//are i - j >= iD?
// is numsi - numsj >= vD?
// if true, return [i j]
//use  math.abs 

var findIndices = function (nums, indexDifference, valueDifference) {
    for (i = 0; i < nums.length; i++) {
        if (i + indexDifference < nums.length) {
            for (j = i + indexDifference; j < nums.length; j++) {
                if (Math.abs(nums[i] - nums[j]) >= valueDifference) {
                    return [i, j]
                }
            }
        }
    }
    return [-1, -1]
};