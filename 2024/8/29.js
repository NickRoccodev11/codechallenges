/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let uniques = new Set(nums)
  let i = 0;
  for(item of uniques){
      nums[i] = item;
      i++;
  }
  return uniques.size
};

//BUT we can leverage the fact that this is a SORTED array: 

var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  
  let j = 0; // Pointer for the position of the next unique element

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[j]) { // Found a new unique element
          j++;
          nums[j] = nums[i]; // Place it in the next position
      }
  }
  
  return j + 1; // Return the count of unique elements
};
