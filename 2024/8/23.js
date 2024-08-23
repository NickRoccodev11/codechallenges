/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if(m + n == 1){
      if(m == 1){
          return;
      }else{
          nums1[0] = nums2[0];
          return;
      }
  }
  for(let i = 0; i < nums2.length; i ++){
      nums1[m] = nums2[i];
      m++;
  }
  nums1.sort((a,b)=> a-b)
};