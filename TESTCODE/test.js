const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findWaldo(crowd) {
    // Return y (row) and x (column) coordinates of Waldo ([0,0] is top-left)

    let map = {},
        waldo = '';
    for (i = 0; i < crowd.length; i++) {
        for (occurence of crowd[i]) {
            map[occurence] = map[occurence] + 1 || 1
        }
    }
    log(map)
    for (person in map) {
        if (map[person] === 1) {
            waldo = person
        }
        log(waldo)
    }

    for (i = 0; i < crowd.length; i++) {
        for (j = 0; j < crowd[i].length; j++) {
            if (crowd[i][j] === waldo) {
                return [i, j]
            }
        }
    }
    return [0, 0]
}
let beach =
    [
        "             ",           // Air
        "         w   ",           // Air with a bird
        "   w         ",           // Air with a bird
        "~~~~~~~~~~~~~",           // Sea
        ".~..~~.~~~..~",           // Waves on beach
        "...P......P..",           // Beach with some people
        "......P..P...",           // Beach with some people
        "..PW........."            // Beach with Waldo and presumably a friend next to him
    ];


log(findWaldo(beach))




















//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
