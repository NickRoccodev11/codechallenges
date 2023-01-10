const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
 var shortestCompletingWord = function(licensePlate, words) {
    let plateMap = {},
    possibles= [],
    counter;
    for(letter of licensePlate ){
        if(letter.toLowerCase() !== letter ||
        letter.toUpperCase()!== letter ){
        plateMap[letter.toLowerCase()] = plateMap[letter.toLowerCase()]+1 || 1
        }
     }
     
     for(i=0;i<words.length; i++){
         let pass = true;
         let wordMap= {} 
         for(letter of words[i]){
             if(plateMap[letter]){
                 wordMap[letter]= wordMap[letter]+1 || 1
                 }
         }
         for(letter in plateMap){
             if(!wordMap[letter] || wordMap[letter] < plateMap[letter]){
                 pass = false
             }
         }
         if(pass){
            possibles.push(words[i])
         }
     }
     log(possibles)
     log( possibles.sort((a,b)=> a.length-b.length ))
     if(possibles.length < 2){
         return possibles[0]
     }else{
         return possibles.sort((a,b)=>a.length < b.length )[0]
     }
};
// "1s3 456"
// ["looks","pest","stew","show"]
log(shortestCompletingWord("1s3 456",["looks","pest","stew","show"]))

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
