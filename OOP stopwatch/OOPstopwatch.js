const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    //all even numbers can be used
    //if a letter is odd, letter-1 can be used
    //One odd value can be used for center, 
    // if there are no single letters, an odd amount of letters can be used once. 
    // create a map of letters and their frequency
    // create an array from the values, iterate
    // create a "center" variable = false
    // if center is false and we reach an odd value, use it and change center = true
    // after center is true, if a value is > 2 and odd, use val-1 to be added to total
    let center = false,
        total = 0,
        freqMap = {};
    for (letter of s) {
        if (!freqMap[letter]) {
            freqMap[letter] = 1;
        } else {
            freqMap[letter]++;
        }
    }
    let valArray = Object.values(freqMap)
    for (i = 0; i < valArray.length; i++) {
        if (!center && valArray[i] % 2 !== 0) {
            total += valArray[i];
            center = true
        } else if (center && valArray[i] % 2 !== 0) {
            total += valArray[i] - 1;
        } else {
            total += valArray[i];
        }
    }
    return total
};
log(longestPalindrome("abccccdd"))
log(longestPalindrome("a"))
log(longestPalindrome("abbcccccddddd"))//11 bccddaddccb


//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
