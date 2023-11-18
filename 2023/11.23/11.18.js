

// You are given an integer n that consists of exactly 3 digits.

// We call the number n fascinating if, after the following modification, the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:

// Concatenate n with the numbers 2 * n and 3 * n.
// Return true if n is fascinating, or false otherwise.

// Concatenating two numbers means joining them together. For example, the concatenation of 121 and 371 is 121371.


// start by stringifying your number. 
//save *2 version to a var, concat the var onto string num
//repeat with 3
//string must be 9 chars, or else return false
//loop through the string: if indexOf !== lastindexOf return false
// if char == 0 return false
//return true!


var isFascinating = function (n) {
    let stringVer = n.toString();
    let concatted;
    for (i = 2; i < 4; i++) {
        concatted = i * n;
        stringVer+= concatted;
    }
    if (stringVer.length !== 9 ||
        stringVer.indexOf("0") !== -1) {
        return false
    }
    for (i = 0; i < stringVer.length; i++) {
        if (stringVer.indexOf(stringVer[i]) !== stringVer.lastIndexOf(stringVer[i])) {
            return false
        }
    }
    return true
};