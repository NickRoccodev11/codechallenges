const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a string of characters, return the character that appears the most often
// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

//with object methods

const max = s => {
    let charMap = {};
    for (char of s) {
        if (!charMap[char]) {
            charMap[char] = 1
        } else {
            charMap[char]++
        }
    }
    let max = Math.max(...Object.values(charMap))
    return Object.keys(charMap).find(key => charMap[key] === max)
}
log(max("hello world"), "l")

// without//
const max2 = s => {
    let max = 0,
        current = 0,
        letter = '';
    for (i = 0; i < s.length; i++) {
        for (j = 0; j < s.length; j++) {
            if (s[i] === s[j] && i !== j) {
                current++
            }
        }
        if (current > max) {
            max = current;
            letter = s[i]
        }
        current = 0
    }
    return letter
}

log(max2("hello world"), "l")

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
