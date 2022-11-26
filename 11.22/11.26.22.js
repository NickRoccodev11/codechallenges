// Given an integer num, repeatedly add all its digits until 
// the result has only one digit, and return it.



// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

// **
//  * @param {number} num
//  * @return {number}
//  */
var addDigits = function (num) {
    let ns = num.toString()
    while (ns.length > 1) {
        let nsArr = ns.split('');
        ns = nsArr.reduce((a, c) => a + parseInt(c), 0).toString()
    }
    return parseInt(ns)
};

log(addDigits(38)) //2
log(addDigits(0)) //0
log(addDigits(436)) //4