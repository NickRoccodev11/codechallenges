

let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let wordmap = {}
    let mostFrequetArray = [];
    words.sort();
    for (char of words) {
        if (!wordmap[char]) {
            wordmap[char] = 1
        } else {
            wordmap[char]++
        }
    }
    let wordArray = Object.keys(wordmap);
    let valueArray = Object.values(wordmap);
    let hiFreq = Math.max(...valueArray);
while(mostFrequetArray.length < k){
    for (i = 0; i < wordArray.length; i++) {
        if (valueArray[i] === hiFreq) {
            mostFrequetArray.push(wordArray[i])
            if(mostFrequetArray.length===k){
                return mostFrequetArray
                
            }
        }
    }
    hiFreq--;
}
    return mostFrequetArray
};

log(topKFrequent(["i","love","leetcode","i","love","coding"],1))

///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
