const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var kookaCounter = function(laughing) {
    let male = true;
    let birds = 0
    
    for(i=0; i<laughing.length; i++){
      if(laughing[i]  === "H"){
        if(!male){
          male = true;
          birds++
        }
      }else if (laughing[i] === "h"){
        if(male){
          male = false 
          birds++
        }
      }
    }
    return birds
  }


log(kookaCounter( "HaHaHahahaHaHa"))


//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
