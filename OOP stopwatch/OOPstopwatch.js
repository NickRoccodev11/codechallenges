const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a number as an input, print out every integer from 1 to that number.
//  However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, 
// print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

const fizzBuzz = n => {
    for (i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log("Fizzbuzz!")
        } else if (i % 3 === 0) {
            console.log("Buzz!")
        } else if (i % 2 === 0) {
            console.log("Fizz!")
        } else {
            console.log(i)
        }
    }
}

log(fizzBuzz(100))



//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
