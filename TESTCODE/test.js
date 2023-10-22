const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode
// Parameters - clarify all possibilities for params. think of edge cases. 
//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 
//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:
//1 Break your algorithm/function into individual operations
//2 Calculate the Big O of each operation
//3 Add up the Big O of each operation together
//4 Remove the constants
//5 Find the highest order term — this will be what we consider the Big O of our algorithm/function
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

// Return the number of strings in words that are a prefix of s.

// A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.



// Example 1:



var rearrangeCharacters = function (s, target) {
  let copies = 0
  let sMap = {}
  let visited = []

  for (char of s) {
    if (target.indexOf(char) !== -1) {
      if (!sMap[char]) {
        sMap[char] = 1
      } else {
        sMap[char]++
      }
    }
  }
  console.log(sMap, "Smap")
  for (i = 0; i < target.length; i++) {
    if (!sMap[target[i]]) {
      return 0
    } else {
      if (visited.includes(target[i])) {
        console.log("reducing sMap")
        sMap[target[i]]--;
        console.log(sMap, "Smap")
      }
      if (copies === 0) {
        console.log("copies === 0")
        copies = sMap[target[i]]
        visited.push(target[i])
      } else if (sMap[target[i]] < copies) {
        console.log("reassigning copies", copies)
        copies = sMap[target[i]]
        visited.push(target[i])
      }
    }
  }
  return copies
};


console.log(rearrangeCharacters("codecodecodecode","codecode"))
// console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa"))
// console.log(rearrangeCharacters("abcba","abc"))