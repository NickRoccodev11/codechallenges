const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// REASSIGNMENT VS RE-DECLARATION INSIDE OF FUNCTIONS



let x = 1

function reassign(){
    x = 2
}

reassign();
console.log(x) // 2 ... REASSIGNMENT CHANGES GLOBAL VALUE

let y = 1

function reassign2(){
    let y  = 2
}

reassign2();
console.log(y) // 1 ... REDECLARATION DOES NOT CHANGE GLOBAL VALUE









//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
