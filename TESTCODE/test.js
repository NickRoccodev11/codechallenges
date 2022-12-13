const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    let sMap = {}
    for (i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) {
            if (Object.values(sMap).includes(t[i])) {
                log("first")
                log(s[i],t[i])
                return false
            }
            sMap[s[i]] = t[i]
        } else {
            // log(s[i], t[i])
            if (sMap[s[i]] !== t[i]) {
                log("second")
                return false
            }
        }
    }
    return true
};

log(isIsomorphic("paper", "title"))

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
