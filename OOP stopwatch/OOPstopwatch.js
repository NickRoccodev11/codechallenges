let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let phrase = "The rain in Spain falls mainly swimmingly on the plain"

function longest(str) {
    return str.split(" ").reduce((acc, cur) => {
        if (cur.length > acc.length) {
            return cur
        } else {
            return acc
        }
    }, "")
}
// log(longest(phrase))

function longest2(str){
    return str.split(" ").sort((wordA,wordB)=> {
        return wordB.length - wordA.length
    })[0]
}

log(longest2(phrase))


///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
