const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Given a string of characters as input, write a
//  function that returns it with the characters reversed. 
//  No Reverse Method (well brute force it first, but then no reverse method)! 

// const reverseS = s => s.split('').reverse().join('')

// const reverseS = s => {
//     let sArr = s.split(''),
//         reversed = "";
//     for (letter of s) {
//         reversed += sArr.pop()
//     }
//     return reversed
// }

const reverseS = s => {
    let reversed = "";
    for (letter of s) {
        reversed = letter + reversed
    }
    return reversed
}

//Important: make sure to reference the original string
//  in your loop termination expression

// const reverseS = s => {
//     let sArr = s.split(''),
//         reversed = "";
//     for (i=0; i<sArr.length; i++) { <==== !!! this will end early
//         reversed += sArr.pop()
//     }
//     return reversed
// }


// NOTE: using forEach behaves differently because the array is one less each time it returns
// you only end up with Half the word!
//even using the reference to the array in the argument doesn't prevent this behavior

// const reverseS = s => {
//     let sArr = s.split(''),
//         reversed = "";
//     sArr.forEach((char,i,a)=> reversed += a.pop())
//     return reversed
// }

// "gooses" => "ses"



log(reverseS("gooses"))
log(reverseS("ollyollyoxenfree"))
log(reverseS("abba"))

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
