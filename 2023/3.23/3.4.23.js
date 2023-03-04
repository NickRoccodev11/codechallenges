// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.


var mispelled = function (word1, word2) {
    if (Math.abs(word1.length - word2.length) > 2) return false
    let diff = 0
    let arr1 = word1.split("")
    let arr2 = word2.split("")

    if (arr1[0] !== arr2[0]) {
        if (arr1.length > arr2.length) {
            arr1.shift()
            diff++
        } else if (arr2.length > arr1.length) {
            arr2.shift()
            diff++
        }
    } else if (arr1[arr1.length - 1] !== arr2[arr2.length - 1]) {
        if (arr1.length > arr2.length) {
            arr1.pop()
            diff++
        } else if (arr2.length > arr1.length) {
            arr2.pop()
            diff++
        }
    }

    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            diff++
            if (diff >= 2) {
                return false
            }
        }
    }

    return true
}

