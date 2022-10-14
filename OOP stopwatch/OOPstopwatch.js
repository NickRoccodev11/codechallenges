

let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function igLatinPay(str) {
    let iterations = str.length
    let vowels = ["a", "e", "i", "o", "u"]
    let consonants = ""
    for (i = 0; i < iterations; i++) {
        if (vowels.includes(str[i]) && i === 0) {
            return str + "way"
        } else if (vowels.includes(str[i]) && i !== 0) {
            break;
        } else {
            consonants += str[i]
        }
    }
    return str.slice(consonants.length) + consonants + "ay"
}




log(igLatinPay("stove"), "ovestay")
log(igLatinPay("oven"), "ovenway")
log(igLatinPay("hover"), "overhay")
log(igLatinPay("street"), "eetstray")





///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
