
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet:
//  a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function wordRater(str) {
    let strArr = str.split(" ")
    let score = 0
    let scoreArr = []
    for (i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            scoreArr.push(score);
            score = 0;
        } else {
            score += str.charCodeAt(i) - 96
            if (i === str.length - 1) {
                scoreArr.push(score);
                score = 0;
            }
        }
    }
    for (i = 0; i < scoreArr.length; i++) {
        if (scoreArr[i] > score) {
            score = scoreArr[i]
        }
    }
    return strArr[scoreArr.indexOf(score)]
}