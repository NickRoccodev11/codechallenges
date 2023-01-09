
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.



/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let top = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        mid = ["a", 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        bot = ["z", "x", "c", "v", "b", "n", "m"],
        ans = []
    for (i = 0; i < words.length; i++) {
        if (bot.includes(words[i][0].toLowerCase())) {
            for (j = 0; j < words[i].length; j++) {
                if (!bot.includes(words[i][j].toLowerCase())) {
                    break;
                } else if (j == words[i].length - 1) {
                    ans.push(words[i])
                }
            }

        } else if (top.includes(words[i][0].toLowerCase())) {
            for (j = 0; j < words[i].length; j++) {
                if (!top.includes(words[i][j].toLowerCase())) {
                    break;
                } else if (j == words[i].length - 1) {
                    ans.push(words[i])
                }
            }
        } else if (mid.includes(words[i][0].toLowerCase())) {
            for (j = 0; j < words[i].length; j++) {
                if (!mid.includes(words[i][j].toLowerCase())) {
                    break;
                } else if (j == words[i].length - 1) {
                    ans.push(words[i])
                }
            }
        }
    }
    return ans
}



