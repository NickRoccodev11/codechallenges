// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let curSub = '',
        longest = 0;
    for (i = 0; i < s.length; i++) {
        for (j = i; j < s.length; j++) {
            if (!curSub.includes(s[j])) {
                curSub += s[j];
            } else {
                if (curSub.length > longest) {
                    longest = curSub.length;
                    curSub = '';
                    break;
                } else {
                    curSub = ''
                    break;
                }
            }
        }
    }
    return longest > curSub.length ? longest : curSub.length
};