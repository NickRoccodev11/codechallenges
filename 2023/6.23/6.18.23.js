// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

//start a loop at left, continue to right
// create an array for answers
// on each num:
// save to variable
//  Stringify 
// run inner loop step through characters and use modulo
//pass? push to array


var selfDividingNumbers = function (left, right) {
    let answers = []
    let num = 0
    let nStr = ""
    for (i = left; i <= right; i++) {
        num = i;
        nStr = i.toString()
        if (nStr.includes("0")) {
            continue;
        }
        for (j = 0; j < nStr.length; j++) {
            if (num % Number(nStr[j]) !== 0) {
                break;
            } else if (j === nStr.length - 1) {
                answers.push(num)
            }
        }
    }
    return answers
};

console.log(selfDividingNumbers(1, 22))