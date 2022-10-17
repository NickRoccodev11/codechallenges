

let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reverseInteger(num) {
    let isNegative = false,
        trailingZeros = true,
        stringInt = num.toString();
    finalInt = []
    if (stringInt[0] === "-") {
        isNegative = true;
        stringInt = stringInt.split('')
        stringInt.shift();
        stringInt = stringInt.reverse()
    } else {
        stringInt = stringInt.split('').reverse()
    }
    for (char of stringInt) {
        if (trailingZeros && char !== "0") {
            trailingZeros = false
            finalInt.push(char)
        } else if (!trailingZeros) {
            finalInt.push(char)
        }
    }
    if (isNegative) {
        finalInt.unshift("-")
    }
    return parseInt(finalInt.join(""))
}

log(reverseInteger(-123)) // should return -321
log(reverseInteger(900)) // should return 9
log(reverseInteger(9001)) // should return 1009
log(reverseInteger(-100)) // should return 1009
let myNum = "00009";

log(parseInt(myNum))


///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
