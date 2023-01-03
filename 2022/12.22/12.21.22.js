
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.






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