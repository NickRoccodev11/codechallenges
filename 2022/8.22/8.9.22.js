// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.


function vowelBack(s) {
  let newPhrase = "",
    vowels = ["a", "i", "u"],
    co = ["c", "o"]
  for (i = 0; i < s.length; i++) {
    if (co.includes(s[i])) {
      newPhrase += String.fromCharCode(s.charCodeAt(i) - 1)
    } else if (s[i] === "d" || s[i] === "e") {
      newPhrase += "a"
    } else if (vowels.includes(s[i])) {
      if (s[i] == "a") {
        newPhrase += "v"
      } else {
        newPhrase += String.fromCharCode(s.charCodeAt(i) - 5)
      }
    } else if (!vowels.includes(s[i])) {
      if (s.charCodeAt(i) + 9 <= 122) {
        newPhrase += String.fromCharCode(s.charCodeAt(i) + 9)
      } else if (s.charCodeAt(i) + 9 > 122) {
        newPhrase += String.fromCharCode(((s.charCodeAt(i) + 8) % 122) + 97)
      }
    }
  }
  let finalAnswer = ""
  for (k = 0; k < newPhrase.length; k++) {
    if (newPhrase[k] === "c" ||
      newPhrase[k] === "o" ||
      newPhrase[k] === "d" ||
      newPhrase[k] === "e") {
      finalAnswer += s[k]
    } else {
      finalAnswer += newPhrase[k]
    }
  }
  return finalAnswer
}