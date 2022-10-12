let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function isPalindrome(word){
    let reversedString = word.split('').reverse().join('')
    return word === reversedString 
}

log(isPalindrome('bob'), 'true')
log(isPalindrome('racecar'),"true")
log(isPalindrome('killalter'),'false')
log(isPalindrome('starrats'), 'true')
log(isPalindrome('whiskey'), 'false')