// Set Reducer
// Intro
// These arrays are too long! Let's reduce them!

// Description
// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
// Example

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

// [0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

// When your function has reduced the array to a single integer following these rules, it should return that integer.

// [2] => 2

// Rules and assertions
// All test arrays will be 2+ in length
// All integers in the test arrays will be positive numbers from 0 - 9
// You should return an integer, not an array with 1 element

function setReducer(input) {
    if (input.length <= 1) {
        return input[0]
    }
    let reducedArr = [],
        count = 1
    for (i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++
        } else {
            reducedArr.push(count)
            count = 1;
        }
    }
    return setReducer(reducedArr)
}


// a function that checks if an array is sorted, and in what order 

function isSortedAndHow(array) {
    let asc = true,
        des = true;

    for (i = 0; i < array.length; i++) {
        if (i !== array.length - 1 && array[i] > array[i + 1]) {
            asc = false
        } else if (i !== array.length - 1 && array[i] < array[i + 1]) {
            des = false
        }
    }
    if (!asc && !des) {
        return "no"
    } else if (asc) {
        return "yes, ascending"
    } else {
        return "yes, descending"
    }
}

// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be called, otherwise call the func2.




const _if = (bool, func1, func2) => bool ? func1() : func2()