
// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

// Return the number of strings in words that are a prefix of s.

// A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.



// Example 1:

// Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
// Output: 3
// Explanation:
// The strings in words which are a prefix of s = "abc" are:
// "a", "ab", and "abc".
// Thus the number of strings in words which are a prefix of s is 3.
// Example 2:

// Input: words = ["a","a"], s = "aa"
// Output: 2
// Explanation:
// Both of the strings are a prefix of s. 
// Note that the same string can occur multiple times in words, and it should be counted each time.


// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length, s.length <= 10
// words[i] and s consist of lowercase English letters only.

//create answer variable
//iterate  through array, at each word :
//sub loop, if loop makes it to last character without breaking, increment answer
//if character doesn't match s, break;
// ["a","b","c","ab","bc","abc"], s = "abc"
var countPrefixes = function (words, s) {
    let answer = 0;

    for (i = 0; i < words.length; i++) {
        for (j = 0; j < words[i].length; j++) {
            if (words[i][j] !== s[j]) {
                break;
            }
            if (j === words[i].length - 1) {
                answer++
            }
        }
    }
    return answer
};
console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"))