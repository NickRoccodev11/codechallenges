// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
  
    const generatePermutations = (current, remaining) => {
      if (remaining.length === 0) {
        result.push(current);
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        const updatedCurrent = current.concat(remaining[i]);
        const updatedRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
        generatePermutations(updatedCurrent, updatedRemaining);
      }
    };
  
    generatePermutations([], nums);
    return result;
  };