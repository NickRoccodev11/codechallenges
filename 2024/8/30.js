//in this version, two duplicate elements are allowed. do not create a new array, return number of elements that are left after removing all elements above 3

var removeDuplicates = function(nums) {
  let j = 1; // start from the second position
  let count = 1; // count occurrences of the current number

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
          count++;
      } else {
          count = 1; // reset count for a new number
      }

      if (count <= 2) {
          nums[j] = nums[i];
          j++;
      }
  }

  return j; // j is the length of the modified array
};
