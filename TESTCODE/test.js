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
    let map = {},
        final = [],
        strings = [],
        zero = false;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].toString() === arr[i]) {
            if (strings.includes(arr[i])) {
                if (!final.includes(arr[i])) {
                    final.push(arr[i])
                    continue;
                }
            } else {
                strings.push(arr[i])
                continue;
            }
        } else if (arr[i] === 0) {
            if (!zero) {
                zero = true
                continue;
            } else {
                final.push(0)
                continue;
            }
        }

        if (!map[arr[i]]) {
            map[arr[i]] = arr[i]
            log(`idx:${i}    arr[i]: ${arr[i]}    map: ${map[arr[i]]}`)

        } else {
            if (map[arr[i]] === arr[i] && !final.includes(arr[i])) {
                final.push(arr[i])
            }
        }
    }
    return final
}
log(duplicates(["-3", "3", 1, 8, -1, "-3", 10, 1, -8, 2, 5, 8, "-3"]))
// ["-3","3",1,8,-1,"-3",10,1,-8,2,5,8,"-3"]: expected [ '-3', 1, 8, '-3' ] to deeply equal [ '-3', 1, 8 ]
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
