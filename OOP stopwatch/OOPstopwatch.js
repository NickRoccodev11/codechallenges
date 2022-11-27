const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function (pattern, s) {
    let sArr = s.split(" ")
    if (pattern.length !== sArr.length) {
        return false
    }
    let pMap = {};
    for (i = 0; i < pattern.length; i++) {
        if (!pMap[pattern[i]]) {
            if (sArr.indexOf(sArr[i]) === sArr[i]) {
                return false
            }
            pMap[pattern[i]] = sArr[i]
        } else {
            if (pMap[pattern[i]] !== sArr[i]) {
                return false;
            }
        }
    }
    return true;
};

log(wordPattern("abba", "dog cat cat dog")) //t
log(wordPattern("abca", "dog cat fish dog")) //t
log(wordPattern("aaaa", "dog dog dog dog")) //t
log(wordPattern("abba", "dog cat dog cat")) //f
log(wordPattern("abba", "dog cat cat dog dog ")) //f
log(wordPattern("abba", "dog dog dog dog")) //f

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
