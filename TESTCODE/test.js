const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const bubbleSort = (array) => {
    let changed = true

    while (changed) {
        changed = false;
        for (i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                changed = true;
                let placeHolder = array[i]
                array[i] = array[i + 1]
                array[i + 1] = placeHolder
            }
        }
    }
    return array
}


log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))
             // 2  5  6  4  3  7  9  1  8  10
             // 2  5  4  3  6  7  1  8  9  10
             // 2  4  3  5  6  1  7  8  9  10
            //  2  3  4  5  1  6  7  8  9  10
            //  2  3  4  1  5  6  7  8  9  10
            //  2  3  1  4  ....
            //  2  1  3  4 ....
            //  1  2  3  4 !!!

// - 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
