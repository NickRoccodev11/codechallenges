
var removeDuplicates = function(nums) {
  let uniques = new Set(nums)
  nums = Array.from(uniques)
  return uniques.size
};

const arr = [1,1,2]

console.log(removeDuplicates(arr), arr)