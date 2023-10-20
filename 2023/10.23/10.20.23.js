// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// declare empty array
// initialize backwards running loop
//check for eveness, after pushing to answer arr, check length of arraqy
// if Array.length === number return array.reverse() (or unshift them in each time you add)

function evenNumbers(array, number) {
    let answers = [];
    for (i = array.length - 1; i >= 0; i--) {
        if (array[i] % 2 === 0) {
            answers.unshift(array[i])
        }
        if (answers.length === number) {
            return answers
        }
    }
}