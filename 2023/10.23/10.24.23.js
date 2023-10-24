// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

//iterate. keep a var for currentSmallestNum
//if a Math.abs(elemnt) is less than current smallest num, replace it
// if it is equal to, check to see if its original value (no math.abs) is less than current
//if they are equal, just keep original 
//if one is less than the other, take the larger one 
//return currentSmallestNum
var findClosestNumber = function (nums) {
    let currClosest = Infinity;
  
    for (i = 0; i < nums.length; i++) {
      if (Math.abs(nums[i]) === Math.abs(currClosest)) {
        if (nums[i] > currClosest) {
          currClosest = nums[i];
         // log(`current:${currClosest} i: ${i} nums[i] ${nums[i]}`)
        }
      } else if (Math.abs(nums[i]) < Math.abs(currClosest)) {
        currClosest = nums[i];
       // log(`current:${currClosest} i: ${i} nums[i] ${nums[i]}`)
      }
    }
    return currClosest;
  };