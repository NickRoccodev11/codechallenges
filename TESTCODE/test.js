const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const genericMemo = (cb) => {
    let cache = {}
    return n => {
        if (cache[n]) {
            return ` value  already saved as ${cache[n]}`
        } else {
            let result = cb(n)
            cache[n] = result
            return ` ${n}:  ${result} has been added to cache`
        }
    }
}
const plusFive = (x) => {
    return x + 5;
}

const fib = n => {
    if (n < 2) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}
fibMemo = genericMemo(fib)
addFive = genericMemo(plusFive)

log(fibMemo(20))

// - 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
