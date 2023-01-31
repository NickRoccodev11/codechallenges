const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
      let occurrences = 0
      this.forEach((el)=> el === element ? occurrences++ : null )
      return occurrences
    }
  });

let arr = [1,2,3,4,5,6,7,7,7,7,7,2]

log(arr.numberOfOccurrences(2))
log(arr.numberOfOccurrences(7))
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
