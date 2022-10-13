let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function mostFrequentAgain(string) {
//     let charMap = {}
//     let greatest = 0;
//     let char = ""

//     for (char of string) {
//         if (!charMap[char]) {
//             charMap[char] = 1
//         } else {
//             charMap[char]++
//         }
//     }
//     for (prop in charMap) {
//         if (charMap[prop] > greatest) {
//             greatest = charMap[prop];
//             char = prop;
//         }
//     }
//     return char
// }

// log(mostFrequentAgain("hellohhggggg"))

function mostFrequent(string) {
    let charMap = {},
        charArr = [],
        valueArr = [],
        most = 0;

    for(char of string){
        if(!charMap[char]){
            charMap[char] = 1;
        }else{
            charMap[char]++;
        }
    };

    charArr = Object.keys(charMap);
    valueArr = Object.values(charMap);
    most = Math.max(...valueArr);

    return charArr[valueArr.indexOf(most)]
}

log(mostFrequent("gagakklbalcdaeerarixaxxaxaxxaxxarrapraaa"))