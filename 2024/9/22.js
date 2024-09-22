/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const productArr = Array(nums.length).fill(1);
  let total = 1;
  for(let i = 0; i < nums.length; i++){
     productArr[i] = total;
     total *= nums[i];
  }
  total = 1;
  for(let i = nums.length - 1; i>= 0; i--){
     productArr[i] = productArr[i]* total;
     total *= nums[i];
  }
  return productArr;
 };
 