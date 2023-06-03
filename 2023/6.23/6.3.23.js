// given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays


// determine what the common elements are:
// it can be the same element if it appears twice in all arrays

function common(a, b, c) {
    let map = {}
    for (const nums of a) {
      if (!map[nums]) {
        if (b.includes(nums) && c.includes(nums)) {
          map[nums] = 1;
          b.splice(b.indexOf(nums), 1)
          c.splice(c.indexOf(nums), 1)
        }
      } else {
        if (b.includes(nums) && c.includes(nums)){
          map[nums]++
        }
      }
    }
    console.log(map)
  }
  
  console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]))

  // day 1: we have a map of common nums (key) and their frequency (value)