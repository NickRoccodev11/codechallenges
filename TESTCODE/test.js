const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function order(words) {
    if (words.length === 0) {
        return ''
    }
    let current = 1
    let answer = []
    let wordArr = words.split(" ")
    while (answer.length < wordArr.length) {
        for (i = 0; i < wordArr.length; i++) {
            if (wordArr[i].includes(current.toString())) {
                answer.push(wordArr[i]);
                current++
            }
        }
    }

    return answer.join(" ")
}

log(order("do2nt i1 fuck5 4a g3ive"))


// let arr4 = ["hi5", "hello", "whats", "up"]
// let x = 5
// log(arr4[0].includes(x.toString()))













//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
