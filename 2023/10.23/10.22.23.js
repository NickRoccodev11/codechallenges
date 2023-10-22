// You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

// Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

//map over s
// check if letter is included in target (target.indexOf(char[i] !== -1)
// if its in there, create a property with the char's name
//if that prop already exists, increment by 1
//now you have map with chars and their frequency
//iterate over target with a var holding the lowest num from all map properties
// if you get a match and copyVar is 0, set it to the match value
// if you get a match that is lower than current copyVar, re-asign
// if you hit a letter that is not in our map, return 0
// return copyVar

var rearrangeCharacters = function (s, target) {
    let copies = 0
    let sMap = {}

    for (char of s) {
        if (target.indexOf(char) !== -1) {
            if (!sMap[char]) {
                sMap[char] = 1
            } else {
                sMap[char]++
            }
        }
    }
    for (i = 0; i < target.length; i++) {
        if (!sMap[target[i]]) {
            return 0
        } else {
            if (copies === 0) {
                copies = sMap[target[i]]
            } else if (sMap[target[i]] < copies) {
                copies = sMap[target[i]]
                sMap[target[i]]--;
            }
        }
    }
    return copies
};
console.log(rearrangeCharacters("abcba","abc"))
console.log(rearrangeCharacters("abbaccaddaeea","aaaaa"))
console.log(rearrangeCharacters("abcba","abc"))