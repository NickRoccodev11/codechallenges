let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mostFrequent(string) {
    let charMap = {};
    let count=0;
    for (i = 0; i < string.length; i++) {
        if (!charMap[string[i]]) {
            charMap[string[i]] = 1
        } else {
            charMap[string[i]] += 1
            count = charMap[string[i]]
        }
        if (charMap[string[i]] > count) {
            count = charMap[string[i]]
        }
    }
    let arr = Object.getOwnPropertyNames(charMap)

    for (i = 0; i < string.length; i++) {
        if (charMap[string[i]] === count) {
            return arr[i]
        }
    }


}

log(mostFrequent("hellohh"))

function mostFrequent2(string) {
    let curCount = 0,
        finalCount = 0,
        answer = '';

    for (i = 0; i < string.length; i++) {
        curCount = 1
        for (j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j) {
                curCount += 1
            }
        }
        if (curCount > finalCount) {
            finalCount = curCount
            answer = string[i]
        }
        curCount = 0

    }
    return answer
}
log(mostFrequent2("helloogggg"))