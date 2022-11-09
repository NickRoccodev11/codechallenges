const log = console.log
// // // huntober string challenge day one 
// // const log = console.log


// // WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2 WEEK 2

// // WEEK 2 DAY 1

// //compare two array to see if their contents are equal
// // each array will have the same number of internal arrays, 
// // and the same number of primitive types within those arrays

// const arr1 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
// const arr2 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
// const arr3 = [['a', 'B', 'c'], ['d', 'E', 'f'], ['g', 'H', 'i']]
// const arr4 = [['a', 'b', 'c'], ['g', 'h', 'i'], ['d', 'e', 'f']]

// function arrayCompare(array1, array2) {

//     for (i = 0; i < array1.length; i++) {
//         for (j = 0; j < array1[i].length; j++) {
//             if (array1[i][j] !== array2[i][j]) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// // log(arrayCompare(arr1, arr2))

// // DAY 2 ARRAYS  DAY 2 ARRAYS
// // I need twin functions, a function that swaps a given primitive value in a given 
// // 1-dimensional array to an index to the left, and another that swaps it to the right.

// // Some things to note:

// // If the given value is on the edge of the array and can't move in that direction, don't move it.
// // The array passed in should be mutated by this function. Scandalous, I know

// myArray = ['abc', 'xyz', 1, 2, 'Hey!']


// function moveLeft(arr, el) {
//     let placeHolder,
//         startingIndex = arr.indexOf(el),
//         finishIndex = arr.indexOf(arr[arr.indexOf(el) - 1]);

//     if (startingIndex > 0) {
//         placeHolder = arr[finishIndex];
//         arr[finishIndex] = arr[startingIndex];
//         arr[startingIndex] = placeHolder
//     }
//     return arr
// }

// function moveRight(arr, el) {
//     let placeHolder,
//         startingIndex = arr.indexOf(el),
//         finishIndex = arr.indexOf(arr[arr.indexOf(el) + 1]);

//     if (startingIndex < arr.length - 1) {
//         placeHolder = arr[finishIndex];
//         arr[finishIndex] = arr[startingIndex];
//         arr[startingIndex] = placeHolder
//     }
//     return arr
// }

// // log(moveLeft(myArray, 'xyz'))
// // log(moveRight(myArray, 'Hey!'))


// // DAY 3 DAY 3 DAY 3 DAY 3 
// // Today I'd like you to write a function that takes in a given array of strings and 
// // move any entries containing the letter 'a' to the front, and then 
// // move any entries that have over 3 characters to the back. 
// // Please preserve the order of things while you do this!

// // myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// // // move things around
// // => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']


// myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

// function sortAandLength1(arr) {
//     let arr1 = [], arr2 = [], arr3 = [];

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].includes("a")) {
//             arr1.push(arr[i])
//         } else if (arr[i].length > 3) {
//             arr3.push(arr[i])
//         } else {
//             arr2.push(arr[i])
//         }
//     }
//     return arr1.concat(arr2, arr3)
// }

// // sortAandLength(myArr)
// // ALTERNATIVE WITH SORT


// function sortAandLength2(arr) {
//     let newArr = []
//     newArr = arr.sort((a, b) => {
//         if (a.length < 4 && b.length > 3) {
//             return -1
//         } else if (a.length > 3 && b.length < 4) {
//             return 1
//         } else {
//             return 0
//         }
//     })
//     newArr = arr.sort((a, b) => {
//         if (a.includes("a") && !b.includes("a")) {
//             return -1
//         } else if (b.includes("a") && !a.includes("a")) {
//             return 1
//         } else {
//             return 0
//         }
//     })
//     return newArr
// }

// // DAY 4 DAy 4 DAy 4 DAy 4 DAY 4

// // Please write twin functions that each take in a given value
// //  that will only appear once within a given array of a similar structure
// //   to the one described above, which will either move that value up one row or down one 
// //   row in the array, keeping its same horizontal position. It will essentially swap
// //    places with whatever was where it needed to be. Just like in Day 2, don't do anything 
// //    if the given value is already as high or low as it can get.

// // Oh, and go ahead and mutate the given array. We're livin' on the wild side!

// myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// function moveUp(arr, el) {

//     let outerIndex,
//         innerIndex,
//         placeHolder;

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].includes(el)) {
//             outerIndex = i;
//             innerIndex = arr[i].indexOf(el);
//         }
//     };

//     if (outerIndex === arr.length - 1) {
//         return arr;
//     };

//     placeHolder = arr[outerIndex][innerIndex];
//     arr[outerIndex][innerIndex] = arr[outerIndex + 1][innerIndex];
//     arr[outerIndex + 1][innerIndex] = placeHolder;

//     return arr;
// }
// // log(moveUp(myGrid, "c"))

// function moveDown(arr, el) {

//     let outerIndex,
//         innerIndex,
//         placeHolder;

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].includes(el)) {
//             outerIndex = i;
//             innerIndex = arr[i].indexOf(el);
//         }

//     }

//     if (outerIndex === 0) {
//         return arr;
//     }

//     placeHolder = arr[outerIndex][innerIndex];
//     arr[outerIndex][innerIndex] = arr[outerIndex - 1][innerIndex];
//     arr[outerIndex - 1][innerIndex] = placeHolder;

//     return arr
// }
// // log(moveDown(myGrid, "e"))



// // DAY 5 DAy 5 DAY 5 DAy 5

// // Please create a function that will take in an array like we've been working with all week 
// // (X-inner arrays of X-primitive values each) and shuffle it up in place.
// //  Do your best to have a thorough, random shuffle in a single call of your function.


// function randomInPlace(arr) {
//     let placeHolder;
//     let random;
//     for (i = 0; i < arr.length; i++) {
//         random = Math.floor(Math.random() * arr.length )
//         placeHolder = arr[i];
//         arr[i] = arr[random];
//         arr[random] = placeHolder;
//         for (j = 0; j < arr.length; j++) {
//             random = Math.floor(Math.random() * arr.length - 1)
//             placeHolder = arr[i][j];
//             arr[i][j] = arr[i][random];
//             arr[i][random] = placeHolder;
//         }
//     }
//     return arr
// }
// // log(randomInPlace(myGrid))


// WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1 WEEK 3 DAY 1

// simplify this:

function myExampleFunction1(arr) {
    if (arr != null) {
        if (arr.length !== 0) {
            if (arr[0].length !== 0) {
                if (arr.length > 10) {
                    arr.push('maximum')
                } else if (arr.length === 10) {
                    arr.push('maximum')
                } else {
                    if (arr[0] === 'must be maximum') {
                        arr.push('failure')
                    } else if (arr[0] === 'flexible') {
                        arr.push('success')
                    }
                }
            }
        }
    }
    return arr
}


let arr1 = ["flexible", "hi"]
let arr2 = ["must be maximum", "hi", "hi"]
let arr3 = ["", 12, "hi"]
let arr4 = ["must be maximum", 12, "hi", 1, 1, 1, 1, 1, 1, 1]
let arr5 = ["must be maximum", 12, "hi", 1, 1, 1, 1, 1, 1, 1, "eleventh"]
let arr6 = []
let arr7 = null


//simplified: 
let myExampleFunction = arr => {
    if (arr === null || arr.length === 0 || arr[0].length === 0) return arr;
    if (arr.length >= 10) {
        arr.push("maximum");
        return arr;
    } else if (arr[0] !== "must be maximum" && arr[0] !== "flexible") {
        return arr;
    }
    arr[0] === "flexible" ? arr.push("success") : arr.push("failure")
    return arr
}

// log(myExampleFunction(arr1), '["flexible","hi", "success"]')
// log(myExampleFunction(arr2), '["must be maximum","hi","hi","failure"]')
// log(myExampleFunction(arr3), '["", 12,"hi"]')
// log(myExampleFunction(arr4), '["must be maximum", 12, "hi",1,1,1,1,1,1,1, "max"]')
// log(myExampleFunction(arr5), '["must be maximum", 12, "hi", 1, 1, 1, 1, 1, 1, 1,"eleventh","max"]')
// log(myExampleFunction(arr6), '[]')
// log(myExampleFunction(arr7), 'null')

// CLEAN UP THIS CODE: 

function comp1(a, b) {
    const c = new Date()
    const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
    const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
    const as = a.toDateString()
    const bs = b.toDateString()
    if (da * 2 <= db) {
        return `If you thought ${as} was a long wait, wait until you see how long it is until ${bs}.`
    } else if (da < db) {
        return `Don't worry, ${bs} isn't too much farther away than ${as} in the scheme of things.`
    } else if (da === db) {
        return `They're the same number of days away!`
    } else {
        return `You know ${as} is closer, right?`
    }
}

function comp2(a, b) {
    const c = new Date()
    const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
    const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
    const as = a.toDateString()
    const bs = b.toDateString()
    if (da < db) {
        const x = Math.floor(db / da)
        return `Looks like ${bs} is ${x} times farther away than ${as}.`
    } else if (da === db) {
        return `Same exact date there, mate.`
    } else {
        const x = Math.floor(da / db)
        return `Looks like ${as} is ${x} times farther away than ${bs}.`
    }
}

function tot(a, b) {
    const c = new Date()
    const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
    const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
    const as = a.toDateString()
    const bs = b.toDateString()
    const x = db - da
    return `You have ${da} days left until ${as}, and ${db} days left until ${bs}. There are ${x} days between them.`
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022, 09, 26)
const dateB = new Date(2022, 11, 25)

//MY ANSWER:


function timeElapsedSince(date) {
    const c = new Date()
    return Math.ceil(Math.abs(c.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}

function howMuchFartherAway(date1, date2) {
    let timeElapsedsince1 = timeElapsedSince(date1)
    let timeElapsedsince2 = timeElapsedSince(date2)
    const date1String = date1.toDateString()
    const date2String = date2.toDateString()
    if (timeElapsedsince1 * 2 <= timeElapsedsince2) {
        return `If you thought ${date1String} was a long wait, wait until you see how long it is until ${date2String}.`
    } else if (timeElapsedsince1 < timeElapsedsince2) {
        return `Don't worry, ${date2String} isn't too much farther away than ${date1String} in the scheme of things.`
    } else if (date1String === date2String) {
        return `They're the same number of days away!`
    } else {
        return `You know ${date1String} is closer, right?`
    }
}
// log(howMuchFartherAway(new Date(2034, 09, 26), new Date(2034, 10, 26)))

function howManyTimesFarther(time1, time2) {
    return Math.floor(time1 / time2)
}

function howManyTimesFartherAway(date1, date2) {

    const timeElapsedsince1 = timeElapsedSince(date1)
    const timeElapsedsince2 = timeElapsedSince(date2)
    const date1String = date1.toDateString()
    const date2String = date2.toDateString()
    if (timeElapsedsince1 < timeElapsedsince2) {
        return `Looks like ${date2String} is ${howManyTimesFarther(timeElapsedsince2, timeElapsedsince1)} times farther away than ${date1String}.`
    } else if (timeElapsedsince1 === timeElapsedsince2) {
        return `Same exact date there, mate.`
    } else {
        return `Looks like ${date1String} is ${howManyTimesFarther(timeElapsedsince1, timeElapsedsince2)} times farther away than ${date2String}.`
    }
}
// log(howManyTimesFartherAway(new Date(2055, 12, 20), new Date(2034, 04, 19)))
function daysBetween(day1, day2) {
    return Math.abs(day1 - day2)
}

function totalDaysLeftUntil(date1, date2) {
    const c = new Date()
    const timeElapsedsince1 = timeElapsedSince(date1)
    const timeElapsedsince2 = timeElapsedSince(date2)
    const date1String = date1.toDateString()
    const date2String = date2.toDateString()
    return `You have ${timeElapsedsince1} days left until ${date1String}, and ${timeElapsedsince2} days left until ${date2String}. There are ${daysBetween(timeElapsedsince2, timeElapsedsince1)} days between them.`
}
// log(totalDaysLeftUntil(new Date(2055, 12, 20), new Date(2034, 04, 19)))

// It's the academic year's end, fateful moment of your school report.
//  The averages must be calculated. All the students come to you and entreat 
//  you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

function getAverage(arr) {
    return Math.floor(arr.reduce((acc, cur) => cur + acc, 0) / arr.length)
}

// log(getAverage([2, 2, 2, 2]))
// log(getAverage([1, 2, 3, 4, 5,]))
// log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]))


// // You will be given an array of numbers in which two numbers occur once and
//  the rest occur only twice. Your task will be to return the sum of the numbers 
//  that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 
// 15 because only the numbers 7 and 8 occur once, and their sum is 15.
//  Every other number occurs twice.


// QUADRATIC SOLUTION

function repeats(arr) {
    let total = 0;
    let isDouble = false;

    for (i = 0; i < arr.length; i++) {
        for (k = 0; k < arr.length; k++) {
            if (arr[i] === arr[k] && i !== k) {
                isDouble = true
            }
        }
        if (!isDouble) {
            total += arr[i]
        }
        isDouble = false
    }
    return total
}


//LINEAR SOLUTION


function repeats(arr) {
    let arrMap = {}

    for (num of arr) {
        if (!arrMap[num]) {
            arrMap[num] = 1
        } else {
            arrMap[num]++
        }
    }
    let total = 0;
    for (number of arr) {
        if (arrMap[number] === 1) {
            total += number
        }
    }
    return total

}

//METHODS ANSWER

function repeats(arr) {
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
        .reduce((a, c) => a + c, 0)
}


// log(
//     repeats([4, 5, 7, 5, 4, 8]),
//     repeats([9, 10, 19, 13, 19, 13]),
//     repeats([16, 0, 11, 4, 8, 16, 0, 11]),
//     repeats([5, 17, 18, 11, 13, 18, 11, 13]),
//     repeats([5, 10, 19, 13, 10, 13])
// )

// log('15,19,12,22,24')

//
// Given an array of digital numbers, return a new array of length number containing the 
// last even numbers from the original array (in the same order).
//  The original array will be not empty and will contain at least "number" even numbers.

// // For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


const lastEvens = (arr, n) => {
    return arr.filter(el => el % 2 === 0).slice(-n)
}

// log(lastEvens([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) //4,6,8
// log(lastEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)) // [-8,26]
// log(lastEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)) // [6]


//
// Return the number of unique arrays that can be formed by picking exactly
//  one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, 
// because it results in only 4 possibilites. 
// They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

let solve = arr => arr.map(subArr => new Set(subArr)).reduce((a, c) => c.size * a, 1)


//OR EVEN...

let solve2 = arr => arr.reduce((a, c) => new Set(c).size * a, 1)


// log(
//     solve2([[1, 2], [4, 4], [5, 6, 6]]),
//     solve2([[1, 2], [4, 4], [5, 6, 6]]),
//     solve2([[1, 2], [3, 4], [5, 6]]),
//     solve2([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]))
// log("4,4,8,72")
//////////////////////////////////////////////////////////////////////////////

// Given an array of integers , Find the Nth smallest element in this array 
// of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

const nthSmallest = (arr, n) => arr.sort((a, b) => a - b)[n - 1]


// log(
//     nthSmallest([3, 1, 2], 2),
//     nthSmallest([15, 20, 7, 10, 4, 3], 3),
//     nthSmallest([15, 20, 7, 10, 4, 3], 3),
//     nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5))


///


// The goal of this exercise is to convert a string to a new string where each
//  character in the new string is "(" if that character appears only once in the
//   original string, or ")" if that character appears more than once in the original
//    string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// NOTE : THIS doesn't work because referencing "str" inside of map refers to str as it was 
// originally passed in, not as it exists currently in the return chain

const parenNo = str => {
    return str.toLowerCase().split('')
        .map(char => str.indexOf(char) === str.lastIndexOf(char) ? "(" : ")").join('')
}

// instead save it to a variable to reference it as a lowercase

const parenClose = str => {
    let arr = str.toLowerCase().split('')
    return arr.map(char => arr.indexOf(char) === arr.lastIndexOf(char) ? "(" : ")").join('')
}

//UPDATE: YOU CAN USE MAP's THIRD PARAMETER : THE ARRAY REFERENCE !

const paren3 = str => str.toLowerCase().split('')
    .map((char, idx, arr) => arr.indexOf(char) === arr.lastIndexOf(char) ? "(" : ")")
    .join('')


// NOW WITH A HASH MAP

const paren = str => {
    let strMap = {};
    for (char of str) {
        if (!strMap[char.toLowerCase()]) {
            strMap[char.toLowerCase()] = 1
        } else {
            strMap[char.toLowerCase()]++
        }
    }
    return str.split('').map(char => strMap[char.toLowerCase()] > 1 ? ")" : "(").join('')
}


// log(paren("din"))
// log(paren("recede"))
// log(paren("Success"))
// log(paren("(( @"))
// log(paren("Bob"))


// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original 
// string by deleting some (can be none) of the characters without disturbing the relative
//  positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "ab", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


function isSub(s, t) {
    if (s.length !== 0 && t.length === 0) {
        return false
    }
    let start = 0;
    for (i = 0; i < s.length; i++) {
        for (j = start; j < t.length; j++) {
            if (s[i] === t[j]) {
                start = j + 1;
                if (j === t.length - 1 && i < s.length - 1) {
                    return false
                }
                break;
            }
            if (j === t.length - 1) {
                return false
            }
        }
    }
    return true
}


// log(isSub("aaaaaa", "bbaaaa"), "false")
// log(isSub("acb", "ahbgdc"), "false")

//
// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.


function stockList(listOfArt, listOfCat) {
    if (listOfArt.length === 0 || listOfCat.length === 0) {
        return ""
    }
    let inStock = {};
    for (i = 0; i < listOfArt.length; i++) {
        if (!inStock[listOfArt[i][0]]) {
            if (listOfCat.includes(listOfArt[i][0])) {
                inStock[listOfArt[i][0]] = parseInt(listOfArt[i].slice(listOfArt[i].indexOf(" ")))
            }
        } else {
            inStock[listOfArt[i][0]] += parseInt(listOfArt[i].slice(listOfArt[i].indexOf(" ")))
        }
    }
    for (i = 0; i < listOfCat.length; i++) {
        if (!inStock[listOfCat[i]]) {
            inStock[listOfCat[i]] = 0
        }
    }
    let codeArr = Object.keys(inStock)
    let stockArr = Object.values(inStock)
    let resArr = []
    for (i = 0; i < listOfCat.length; i++) {

        resArr.push(`(${listOfCat[i]} : ${stockArr[codeArr.indexOf(listOfCat[i])]})`)
    }
    return resArr.join(" - ")
}
// log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
//     ["A", "B", "C", "D"]))
//"(A : 0) - (B : 1290) - (C : 515) - (D : 600)"

// ANOTHER TAKE
//   FROM CODEWARS

function stockList(listOfArt, listOfCat) {
    if (!listOfArt.length || !listOfCat.length) return ''
    return listOfCat.map(w => {
        const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
        return `(${w} : ${s})`
    }).join(' - ')
}

// factorial recursion

const factorial = n => {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1)
    }
}
//

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

const stringer = str => {
    return str.split('').map(char => {
        if (char.toLowerCase() === char) {
            return char.toUpperCase()

        } else if (char.toUpperCase() === char) {
            return char.toLowerCase()

        }
    }).join('').split(" ").reverse().join(" ")


}

// log(stringer("Example Input    l"))

// leons answer
function transformStr(str) {
    let reverersedString = str.split(" ").reverse().join(" ")
    let transformString = reverersedString.map(l => l === l.toUpperCase() ?
        l.toLowerCase() : l.toUpperCase())
    return transformString
}


// // 
// Given a string of words (x), you need to return an array of the words,
//  sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show 
// them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'),
//  ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

// const alphabetLast = x => x.split(" ").sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))


// log(alphabetLast('what time are we climbing up the volcano'))
// log(alphabetLast('man i need a taxi up to ubud'))


//return ms of time elapsed
function past(h, m, s) {
    log(h, m, s)
    return (h * 3600000) + (m * 60000) + (m * 1000)
}
log(past(1, 1, 1))

//if x is not a number, return error. else return x times 50 plus 6
const problem = x => typeof x === "number" ? x * 50 + 6 : "Error"

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

const litres = time => Math.floor(time * .5)

// This problem has lots of gotchas when considering time complexity! 
// Def. don't miss this standup if you want to get better at technical interviews! 

// An ordered sequence of numbers from 1 to N is given.
//  One number might have deleted from it, then the remaining numbers were mixed. 
//  Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')


const findDeletedNumber = (ordered, unordered) => ordered.reduce((a, b) => a + b, 0) - unordered.reduce((a, b) => a + b, 0)

//In this kata, your task will be to replace sad emoticons with funny ones.

// The emoticons, will be represented from:

// Eyes: marked as :, ; or =
// Nose (optional): marked as - or ~
// Mouth: marked as ( or [
// " =( " becomes " =) "

function smile(text) {
    let textArr = text.split('')
    for (i = 0; i < textArr.length; i++) {
        if (textArr[i] === ";" ||
            textArr[i] === ":" ||
            textArr[i] === "=") {
            if (textArr[i + 1] === "~" ||
                textArr[i + 1] === "-") {
                if (textArr[i + 2] === "[") {
                    textArr[i + 2] = "]"
                } else if (textArr[i + 2] === "(") {
                    textArr[i + 2] = ")"
                }
            } else if (textArr[i + 1] === "(") {
                textArr[i + 1] = ")"
            } else if (textArr[i + 1] === "[") {
                textArr[i + 1] = "]"
            }
        }
    }
    return textArr.join('')
}

// convert form data characters to avoid XSS

function htmlspecialchars(formData) {
    let formArr = formData.split('');
    for (i = 0; i < formArr.length; i++) {
        if (formArr[i] === ">") {
            formArr[i] = "&gt;"
        } else if (formArr[i] === "<") {
            formArr[i] = "&lt;"
        } else if (formArr[i] === "&") {
            formArr[i] = "&amp;"
        } else if (formArr[i] === "\"") {
            formArr[i] = "&quot;"
        }
    }
    return formArr.join('')
}

log(htmlspecialchars("<&><\">"))