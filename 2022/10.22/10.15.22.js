
// return boolean : is this number a palindrome?


/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let numString = x.toString()
    let revNumString = x.toString().split('').reverse().join('')

    return numString === revNumString;

};