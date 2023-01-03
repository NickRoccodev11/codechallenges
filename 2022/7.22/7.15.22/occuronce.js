

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

