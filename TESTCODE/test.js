const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Try without recursion first and then get fancy. This problem really needs to be written out. Grab some paper! 

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

let arrayw = ["bat", "tab", "eat", "tea", "ate", "atb"]

let myObj = {}

for (i = 0; i < arrayw.length; i++) {
    let current = arrayw[i].split('').sort().join('')
    if (!myObj[current]) {
        myObj[current] = [];
        myObj[current].push(arrayw[i])
    } else {
        myObj[current].push(arrayw[i])
    }
}
log(Object.values(myObj))

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length === 0) {
        return [[""]]
    }

    let groups = {};

    for (i = 0; i < strs.length; i++) {
        let curr = strs[i].split('').sort().join('')
        if (!groups[curr]) {
            groups[curr] = [];
            groups[curr].push(strs[i])
        } else {
            groups[curr].push(strs[i])
        }
    }
    return Object.values(groups)
};