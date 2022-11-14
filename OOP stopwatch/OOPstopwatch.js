
let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function findX(n) {
    let x = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 2 * n; j++) {

            x += i+j
            //   log(`i${i}   j${j}  x${x}`)
        }
    }
   
    // let j = (n * 2 - 1) * Math.pow(n, 2)
   
    // let i = (n - 1) * Math.pow(n,2)
    return` ${x}   ${(n * 2 - 1) * Math.pow(n, 2) + (n - 1) * Math.pow(n,2)}`
}

// (n - 1) * n / 2 * n * 2


78210


// let x=2
// log(x*x/2 + (x*2)*( x*2)/2)
// 1 16 63 160


//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
