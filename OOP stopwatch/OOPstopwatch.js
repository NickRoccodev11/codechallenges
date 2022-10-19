

let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function memoize(cb) {
    let cache = {}
    return (n) => {
        if (!cache[n]) {
            cache[n] = cb(n)
            return cache[n]
        };
        return `${cache[n]} is the factorial of ${n}`
    }
}



function recursiceFactorial(n){
    if(n===1){
        return n
    }else{
        return n * recursiceFactorial(n-1)
    }
}

memoizedFactorial = memoize(recursiceFactorial);

log(memoizedFactorial(5))
log(memoizedFactorial(5))
log(memoizedFactorial(12))
log(memoizedFactorial(12))




///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
