
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function (strs) {
    if (strs.length === 0) {
        return [[""]]
    }

    let groups = {};

    for (i = 0; i < strs.length; i++) {
        let curr = strs[i].split('').sort().join('')
        if (!groups[curr]) {
            groups[curr] = [];
            groups[curr].push(strs[i])
        } else {
            groups[curr].push(strs[i])
        }
    }
    return Object.values(groups)
};