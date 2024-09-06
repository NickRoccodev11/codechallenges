class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
      for(let i = 0; i < numbers.length; i++){
          let j = i + 1;
          while(j < numbers.length){
              if(numbers[i] + numbers[j] == target){
                  return [i+1, j+1]
              }else if(numbers[i] + numbers[j] > target){
                  break;
              }
              j++;
          }
      }
  }
}
