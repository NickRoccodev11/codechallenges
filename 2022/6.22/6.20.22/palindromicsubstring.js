// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.











function checkDrome(left, right, s) {
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) {
            break;
        }
        left--;
        right++;
    }
    return [left + 1, right]
}

var longestPalindrome = function (s) {
    let max = [0, 1]
    for (i = 0; i < s.length; i++) {
        let even = checkDrome(i - 1, i, s)
        let odd = checkDrome(i - 1, i + 1, s)
        let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even
        max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax
    }
    return s.slice(max[0], max[1])
};