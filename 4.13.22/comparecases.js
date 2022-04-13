// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// function compareEm(a, b) {
//     if (
//         a.toUpperCase() === a.toLowerCase() ||
//         b.toLowerCase() === b.toUpperCase()) {
//         return -1
//     } else if (
//         a === a.toUpperCase() && b === b.toUpperCase() ||
//         a === a.toLowerCase() && b === b.toLowerCase()) {
//         return 1
//     } else if (
//         a === a.toUpperCase() && b === b.toLowerCase() ||
//         a === a.toLowerCase() && b === b.toUpperCase()) {
//         return 0
//     }


// }
// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

