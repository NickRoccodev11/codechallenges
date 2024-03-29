// algo 16 remove all falsy values from a list 


function falsyBouncer(arr) {
    return arr.filter(el => el)
}


// log(falsyBouncer([1, 0, null, '', 5, "hello", NaN])) // should return [1,5]


//find the lowest index at which a given num can be inserted into a sorted array 

// my answer with a version of binary search 
function whereIBelong(arr, num) {
    arr.sort((a, b) => a - b)
    let lo = 0,
        hi = arr.length,
        midpoint;

    do {
        midpoint = Math.floor(lo + (hi - lo) / 2);
        if (arr[midpoint] <= num && arr[midpoint + 1] >= num) {
            return midpoint + 1
        } else if (arr[midpoint] >= num && arr[midpoint - 1] <= num) {
            return midpoint
        }
        else if (midpoint > num) {
            hi = midpoint
        } else {
            lo = midpoint + 1
        }
    } while (hi > lo)

}

// answer:  push num into array, sort, and then return indexOf num

function whereIBelong(arr, num) {
    arr.push(num)
    arr.sort((a, b) => a - b)
    return arr.indexOf(num)
}

// FASTEST: use the for loop

function whereIBelong(arr, num) {
    var counter = 0
    for (i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            counter++;
        }
    }
    return counter
}

// 18: Return the first element from the given array that passes the test specified by the provided function. 
// Both the array and function are passed into the function as arguments as shown below:
// arrayFilter(arr, func)


// my answers (with forEach and for loop)
function arrayFilter(arr, func) {
    let answer;
    arr.forEach(el => {
        if (!answer && func(el)) {
            answer = el
        }
    });
    return answer
}

function arrayFilter(arr, func) {
    let answer;
    for (i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i]
        }
    }
    return false
}

arr = [1, 2, 4, 5, 7]
let func = el => el % 3 === 0
log(arrayFilter(arr, func))


//19; reverse an integer. remove trailing zeros (900 => 9) and account for negatives (-123 => -321)

//my answer
function reverseInteger(num) {
    let isNegative = false,
        trailingZeros = true,
        stringInt = num.toString();
    finalInt = []
    if (stringInt[0] === "-") {
        isNegative = true;
        stringInt = stringInt.split('')
        stringInt.shift();
        stringInt = stringInt.reverse()
    } else {
        stringInt = stringInt.split('').reverse()
    }
    for (char of stringInt) {
        if (trailingZeros && char !== "0") {
            trailingZeros = false
            finalInt.push(char)
        } else if (!trailingZeros) {
            finalInt.push(char)
        }
    }
    if (isNegative) {
        finalInt.unshift("-")
    }
    return parseInt(finalInt.join(""))
}

log(reverseInteger(-123)) // should return -321
log(reverseInteger(900)) // should return 9
log(reverseInteger(9001)) // should return 1009
log(reverseInteger(-100)) // should return 1009

//NOTE parseInt will remove the negative sign at the end of a number string ("321-" => 123 )
//parseInt also takes care of our trailing zeros! this means 
// all the conditonal checks in my answer are unccessary

let myNum = "00005";

log(parseInt(myNum)) // 5

// answer ( similar, but without checks for negative or trailing 0's)

// Reverses a string
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

// Reverses an integer
function reverseInteger(num) {
    let reversedNumber = parseInt(reverseString(num.toString()))

    //Math.sign return 1,-1, or 0 depending on sign of provided number. multiply by it
    return (reversedNumber * Math.sign(num))
}

// 20 Given an array of two numbers, return the cummulative sum of the two numbers 
// and all the numbers between them.

function rangeSum([lo, hi]) {
    let range = []
    for (i = lo; i <= hi; i++) {
        range.push(i)
    }
    return range.reduce((a, b) => a + b)
}
// rather than create an array and then reduce it, create a running total and return that!
// gauss' sum with a range that doesn't start at one

function rangeSum2([lo, hi]) {
    return (lo + hi) * (hi - lo + 1) / 2
}



log(rangeSum2([1, 5]))
