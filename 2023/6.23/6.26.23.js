// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

var decodeMessage = function (key, message) {
    let map = {};
    let curCode = 97;
    for (char of key) {
        if (char !== " " && !map[char]) {
            map[char] = String.fromCharCode(curCode);
            curCode++;
            if (Object.keys(map).length === 26) {
                break;
            }
        }
    }
    let answer = []
    for (i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            answer.push(message[i])
        } else {
            answer.push(map[message[i]])
        }
    }
    return answer.join('')
};