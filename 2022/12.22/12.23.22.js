// REMOVE ALL ADJACENT ANAGRAMS



/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    for (i = 0; i < words.length; i++) {
        if (words[i - 1] !== undefined &&
            words[i - 1].split('').sort().join('') ===
            words[i].split('').sort().join('')) {
            words = words.slice(0, i).concat(words.slice(i + 1))
            i--;
        }
    }
    return words
}
