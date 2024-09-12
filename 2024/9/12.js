/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const map = {};
  for(let i =0; i < nums.length; i++){
      map[i] = nums[i];
  }
  for(idx in map){
      let newIdx = (parseInt(idx) + k) % nums.length;
      nums[newIdx] = map[idx]
  }
};
//shift an array by k. to do this in O(1) time:
//reverse whole arrray
//reverse first k elements
//reverse remaining n - k elements
