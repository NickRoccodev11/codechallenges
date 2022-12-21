







/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let oddIncluded = false,
        total = 0,
        sMap = {};

    for (char of s) {
        sMap[char] = sMap[char] + 1 || 1
    }
    for (letter in sMap) {
        if (sMap[letter] % 2 === 0) {
            total += sMap[letter]
        } else {
            if (!oddIncluded) {
                total += sMap[letter];
                oddIncluded = true;
            } else {
                total += sMap[letter] - 1
            }
        }
    }
    return total
};