const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function racePodium(blocks) {
    let podium = [2, 3, 1];  //  2/4/1  // 3/4/1
    blocks -= 6;
    while (blocks > 0) {
        if (podium[1] - podium[0] > 1) {
            podium[0]++;
            blocks--
        } else if (podium[0] - podium[2] > 1) {
            podium[2]++;
            blocks--;
        } else {
            podium[1]++;
            blocks--;
        }
    }
    let diff = podium[1]-podium[0]
    
    if(diff > 1 && podium[2] > 1 ){
        if(podium[2]>diff){
        podium[0]+= diff;
        podium[2]-= diff;
    }else{
        podium[0]+= diff-1
        podium[2] = 1
    }
}

if(podium[1]===podium[0]){
    podium[0]--;
    podium[2]++;
}
    return podium
}

log(racePodium(10))
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
