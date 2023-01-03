// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest.
//  Sort the words with the same frequency by their lexicographical order.




/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let wordmap = {}
    let mostFrequetArray = [];
    words.sort();
    for (char of words) {
        if (!wordmap[char]) {
            wordmap[char] = 1
        } else {
            wordmap[char]++
        }
    }
    let wordArray = Object.keys(wordmap);
    let valueArray = Object.values(wordmap);
    let hiFreq = Math.max(...valueArray);
    while (mostFrequetArray.length < k) {
        for (i = 0; i < wordArray.length; i++) {
            if (valueArray[i] === hiFreq) {
                mostFrequetArray.push(wordArray[i])
                if (mostFrequetArray.length === k) {
                    return mostFrequetArray

                }
            }
        }
        hiFreq--;
    }
    return mostFrequetArray
};


