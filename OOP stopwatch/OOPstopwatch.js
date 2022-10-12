let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function vowelCount(strng) {
    const vowelArr = ["a", "e", "o", "i", "u"],
        toLower = strng.toLowerCase();
    let count = 0;

    for (i = 0; i < strng.length; i++) {
        if (vowelArr.includes(toLower[i])) {
            count++
        }
    }
    return count
}

log(vowelCount("hello"))
log(vowelCount("by"))
log(vowelCount("arial"))