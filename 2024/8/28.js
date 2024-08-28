/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = nums.filter(num=> num !== val).length
   nums.sort((a,b)=>{
      if(a === val && b !== val){
          return 1;
      }else if (a !== val && b === val){
          return -1;
      }else{
          return 0;
      }
  })
  return k
};