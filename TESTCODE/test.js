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
var lengthOfLongestSubstring = function (s) {
    let curSub = '',
        longest = 0;
    for (i = 0; i < s.length; i++) {
        for (j = i; j < s.length; j++) {
            if (!curSub.includes(s[j])) {
                curSub += s[j];
                log(`curSub:${curSub}   i:${i}      j: ${j}`)
            } else {
                if (curSub.length > longest) {
                    longest = curSub.length;
                    curSub = '';
                    break;
                } else {
                    curSub =''
                    break;
                }
            }

        }
    }
    return longest > curSub.length ? longest : curSub.length
};
log(lengthOfLongestSubstring("jbpnbwwd"))
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
