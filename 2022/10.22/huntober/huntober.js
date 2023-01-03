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


//////////////////////////////////////////////////////////////////////////////


// Given a string, return a new string that has transformed based on the input:

// leons answer
function transformStr(str) {
    let reverersedString = str.split(" ").reverse().join(" ")
    let transformString = reverersedString.map(l => l === l.toUpperCase() ?
        l.toLowerCase() : l.toUpperCase())
    return transformString
}


//return ms of time elapsed
function past(h, m, s) {
    log(h, m, s)
    return (h * 3600000) + (m * 60000) + (m * 1000)
}
// log(past(1, 1, 1))



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

// log(htmlspecialchars("<&><\">"))

//
// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

const arrayDiff = (arr, remArr) => {
    if (arr.length === 0 || remArr.length === 0) {
        return arr
    }
    let removedArr = [],
        remMap = {};

    for (num of remArr) {
        if (!remMap[num]) {
            remMap[num] = num
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (!remMap[arr[i]]) {
            removedArr.push(arr[i])
        }
    }
    return removedArr
}

// Leons solution 
function arrayDiff2(a, b) {
    let newSet = new Set(b)
    return a.filter(n => !newSet.has(n))
}

// log(arrayDiff([1, 8, 2], []), "[1,8,2]")
// log(arrayDiff([3, 4, 3], [3]), '[4]')
// log(arrayDiff([3, 4, 5, 6, 7, 8, 89], [89, 4, 3, 5, 6, 7]), '[8]')
// log(arrayDiff([3, 4, 5], []), '[3,4,5]')
// log(arrayDiff([3, 4, 5], [6]), '[3,4,5]')



// handshake

function getParticipants(handshakes) {
    // if there are no handshakes, there are no attanedees
    if (handshakes === 0) {
        return 0
    }

    // recursive function to determine total number of handshakes n attendees can make
    const potential = (people) => {
        if (people === 1) {
            return 0
        } else {
            return (people - 1) + potential(people - 1)
        }
    }

    //starting with 1 attendant, we increase until we reach or surpass the number of handshakes
    let attendees = 1
    while (potential(attendees) < handshakes) {
        attendees++
    }
    return attendees
}

//a classic 
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz!")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

