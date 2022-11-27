// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.








/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function (pattern, s) {
    let sArr = s.split(" ")
    if (pattern.length !== sArr.length) {
        return false
    }
    let pMap = {};
    for (i = 0; i < pattern.length; i++) {
        if (!pMap[pattern[i]]) {
            if (Object.values(pMap).includes(sArr[i])) {
                return false
            }
            pMap[pattern[i]] = sArr[i]
        } else {
            if (pMap[pattern[i]] !== sArr[i]) {
                return false;
            }
        }
    }
    return true;
};

// log(wordPattern("abba", "dog cat cat dog")) //t
// log(wordPattern("abca", "dog cat fish dog")) //t
// log(wordPattern("aaaa", "dog dog dog dog")) //t
// log(wordPattern("abba", "dog cat dog cat")) //f
// log(wordPattern("abba", "dog cat cat dog dog ")) //f
// log(wordPattern("abba", "dog dog dog dog")) //f