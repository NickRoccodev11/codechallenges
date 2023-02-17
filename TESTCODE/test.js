const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
String.prototype.findParenMatch = function (pos) {
    //return if pos is not a paren
    if (this[pos] !== "(" &&
        this[pos] !== ")") {
        return -1
    }

    //keep track of levels of nested parens
    let levels = 0

    //two loops, one each for dealing with an open or closed paren as our argument 
    if (this[pos] === "(") {

        for (i = pos + 1; i < this.length; i++) {
            if (this[i] === "(") {
                //if we encounter another opener before our close, keep track of levels of nesting
                levels++;
            } else {
                if (levels === 0) {
                    // if we are on the level of the paren we're looking for, and it's a closer, return the index
                    return i
                }
                levels--;
            }
        }
    } else {
        // same as above but in reverse
        for (i = pos - 1; i >= 0; i--) {
            if (this[i] === ")") {
                levels++
            } else {
                if (levels === 0) {
                    return i
                }
                levels--;
            }
          
        }
    }
    return -1
};
log("(())))".findParenMatch(2), 1)
log("(())))".findParenMatch(3), 0)
log("(((())))))".findParenMatch(1), 6)
log("(.)".findParenMatch(1), -1)

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
