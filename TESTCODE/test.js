const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 
// 
//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function makeValley(arr) {

    let sorted = arr.sort((a, b) => a - b),
        left = [],
        right = [],
        bottom = false;

    if (arr.length % 2 !== 0) {
         bottom = sorted.shift()
        log("bottom made")
    }
    for (i = 0; i < sorted.length; i++) {
        if (i % 2 === 0) {
            right.push(arr[i])
            log(`i:${i} right: ${right} `)
        } else {
            left.push(arr[i])
            log(`i:${i} leftt: ${left} `)
        }
    }
    if (bottom) {
      
       left = left.reverse()
       left.push(bottom)
       log(left)
        return left.concat(right)
    } else {
        return left.reverse().concat(right)
    }
}

[]


log(makeValley([17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]))


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
