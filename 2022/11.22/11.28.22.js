// find the longest palindrome that can be made from the input of strings. 
// Case sensitive.

// pseudocode:
    //all even numbers can be used
    //if a letter is odd, letter-1 can be used
    //One odd value can be used for center, 
    // if there are no single letters, an odd amount of letters can be used once. 
    // create a map of letters and their frequency
    // create an array from the values, iterate
    // create a "center" variable = false
    // if center is false and we reach an odd value, use it and change center = true
    // after center is true, if a value is > 2 and odd, use val-1 to be added to total
/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function (s) {

    let center = false,
        total = 0,
        freqMap = {};
    for (letter of s) {
        if (!freqMap[letter]) {
            freqMap[letter] = 1;
        } else {
            freqMap[letter]++;
        }
    }
    let valArray = Object.values(freqMap)
    for (i = 0; i < valArray.length; i++) {
        if (!center && valArray[i] % 2 !== 0) {
            total += valArray[i];
            center = true
        } else if (center && valArray[i] % 2 !== 0) {
            total += valArray[i] - 1;
        } else {
            total += valArray[i];
        }
    }
    return total
};