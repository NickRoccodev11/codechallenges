const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 
// 
//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const mostLikely = (prob1,prob2) => (parseInt(prob1[0]) / parseInt(prob1[2]) ) > (parseInt(prob2[0])  / parseInt(prob2[2]) )


const duplicates = arr => {
    let filt = arr.filter((e,i,a)=> a.indexOf(e) !== a.lastIndexOf(e))
    let filtSet = new Set(filt);
    return [filtSet]
   }

log(duplicates([1,2,3,4,5,3]))

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
