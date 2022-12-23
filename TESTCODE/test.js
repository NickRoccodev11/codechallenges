const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
log(words[1].split('').sort().join(''))

    for (i = 0; i < words.length; i++) {
        if (words[i - 1] !== undefined &&
            words[i - 1].split('').sort() === words[i].split('').sort()) {
            words = words.slice(0, i).concat(words.slice(i + 1))
            i--;
        }
    }
    return words
}
log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]))

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
