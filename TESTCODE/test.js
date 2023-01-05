const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Can you solve with a for loop like before the holidays? How about with recursion? 

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each
//  number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465

const fib = n => {
    if (n === 0) {
        return 0
    }
    let sequence = [0, 1]

    for (i = 2; i <= n; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1])
    }
    return sequence[sequence.length - 1]
}
const fib2 = n => {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {


        return fib2(n - 1) + fib(n - 2)
    }
}


// return 1 
// fib n-1 n = 1 + 2
// fib n-1 n = 2 + 3
// fib(n-1)n = 3 + 4
// log fib 4
function fibM(n, prev = []) {
    if (prev[n] != null) {
        return prev[n]
    }
    let result;
    if (n <= 2) {
        result = 1
    } else {
        result = fibM(n - 1, prev) + fibM(n - 2, prev)
    }
    prev[n] = result
    return result

}


// log(fib(2))
// log(fib(3))
log(fib(30), "Answer")
// log(fib(9))
// log(fib(15))
log("you:")
// log(fib2(2))
// log(fib2(3))
log(fibM(30))
// log(fib2(9))
// log(fib2(15))




//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
