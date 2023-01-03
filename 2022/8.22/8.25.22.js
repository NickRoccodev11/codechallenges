// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original 
// string by deleting some (can be none) of the characters without disturbing the relative
//  positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "ab", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


function isSub(s, t) {
    if (s.length !== 0 && t.length === 0) {
        return false
    }
    let start = 0;
    for (i = 0; i < s.length; i++) {
        for (j = start; j < t.length; j++) {
            if (s[i] === t[j]) {
                start = j + 1;
                if (j === t.length - 1 && i < s.length - 1) {
                    return false
                }
                break;
            }
            if (j === t.length - 1) {
                return false
            }
        }
    }
    return true
}
