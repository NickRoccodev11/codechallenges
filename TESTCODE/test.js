const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////




function remove(string) {

    let finalString = []
    let arr = string.split(" ")

    for (i = 0; i < arr.length; i++) {
        if (!arr[i].includes("!")) {
            finalString.push(arr[i])
        } else {
            if (arr[i].indexOf("!") !== arr[i].lastIndexOf("!")) {
                finalString.push(arr[i])
            }
        }
    }
    return finalString.join(" ");
}

log(remove("Hi! Hi!! !Hi!"))
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
