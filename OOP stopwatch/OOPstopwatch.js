let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let phrase2 = "Buffalo girls won't you come out Tonight and dance by the light of the moon"
let phrase3 = "Buffalo girls won't you come out tonight and dance by the light of the moon"

function replaceWord(str, word, replacement) {

    let strArr = str.split(" ")
    let firstLetter = strArr[strArr.indexOf(word)][0]
    if (firstLetter === firstLetter.toUpperCase()) {
        let capitalized;
        capitalized = replacement[0].toUpperCase() + replacement.slice(1)
        return str.replace(word, capitalized)
    } else {
        return str.replace(word, replacement)
    }
}

log(replaceWord(phrase2, "Tonight", "tomorrow"))
log(replaceWord(phrase3, "tonight", "tomorrow"))












///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
