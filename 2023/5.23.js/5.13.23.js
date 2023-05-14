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
var twoSum = function(nums, target) {
    let numMap= {}
    for (n of nums){
        if(!numMap[n]){
            numMap[n] = n
        }
    }
  log(numMap)
  log(nums, "nums")
  log(nums.indexOf(2))

    for(num in numMap){
        log(num, "top")
        log(target - num, "t-n")
        if(nums.includes(target - num)){
        log("match", num, nums.indexOf(target-num))
        log(num, "and...")
        log(nums.indexOf(num))
        log(nums)
          return [nums.indexOf(target - num), nums.indexOf(num)]
        }
    }
  };
log(twoSum([2,7,11,15],9))