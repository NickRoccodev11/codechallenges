// This challenge is an extension of the kata of Codewars: Missing and Duplicate Number", authored by the user Uraza. (You may search for it and complete it if you have not done it)

// In this kata, we have an unsorted sequence of consecutive numbers from a to b, such that a < b always (remember a, is the minimum, and b the maximum value).

// They were introduced an unknown amount of duplicates in this sequence and we know that there is an only missing value such that all the duplicate values and the missing value are between a and b, but never coincide with them.

// Find the missing number with the duplicate numbers (duplicates should be output in a sorted array).

// Let's see an example:

// arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]

// find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]

// The code should be fast to process long arrays (maximum length aprox. = 1.000.000). The values for the randon tests:



function findDupsMiss(arr) {
  let count = 0,
    dups = [],
    comparator = [],
    missingValue,
    sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b).filter(el => el !== undefined)

  for (i = 0; i < sortedArr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      sortedArr[i] === arr[j] ? count++ : false
    }
    count > 1 ? dups.push(sortedArr[i]) : count = 0
    count = 0;
  }
  for (i = 0; i <= sortedArr[sortedArr.length - 1]; i++) {
    comparator.push(sortedArr[0] + i)
  }
  comparator.length = sortedArr.length + 1

  for (i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== comparator[i]) {
      missingValue = comparator[i]
      break;
    }
  }
  return [missingValue, [...dups]]
}