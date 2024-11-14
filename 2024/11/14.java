class Solution {
  public int removeElement(int[] nums, int val) {
      int numOfVals = 0;
      for(int num : nums){
          if(num == val){
              numOfVals++;
          }
      }
      if(numOfVals == nums.length){
          return 0;
  }
  int end = nums.length - 1;
  for(int i=0; i < nums.length - numOfVals; i++){
  if(nums[i] == val){
      while(nums[end] == val){
          end--;
      }
      nums[i] = nums[end];
      end--;
  }
  }
  return nums.length - numOfVals;
}
}