// check to see if an integer is a palindrome. 
// the negative symbol should bhe considered as part of the integer (-121 === 121- )
//return boolean



/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = x.toString();
    return xStr === xStr.split('').reverse().join('')
};