
// Create a function that takes a string as a parameter and does the following, in this order:

// Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note:

// the alphabet should wrap around, so Z becomes A
// in this kata, y isn't considered as a vowel.
// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

// FUNDAMENTALSSTRINGS



function nextChar(str) {
  let pushedString = ""
  for (i = 0; i < str.length; i++) {
    if (str[i] !== "z" && str[i] !== "Z" && isNaN(parseInt(str[i])) && str[i] !== " ") {
      pushedString += String.fromCharCode(str.charCodeAt(i) + 1)
    } else if (isNaN(parseInt(str[i])) && str[i] !== " ") {
      pushedString += "A"
    } else {
      pushedString += str[i]
    }
  }
  let pushedArr = pushedString.split("")
  let answerArr = []
  pushedArr.map(a => {
    if (a.toLowerCase() === "a" ||
      a.toLowerCase() === "e" ||
      a.toLowerCase() === "i" ||
      a.toLowerCase() === "o" ||
      a.toLowerCase() === "u") {
      answerArr.push(a = a.toUpperCase())
    } else {
      answerArr.push(a = a.toLowerCase())
    }
  })
  return answerArr.join("")
}