// Given a string licensePlate and an array of strings words, find the shortest completing word in words.

// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.


/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
 var shortestCompletingWord = function(licensePlate, words) {
    let plateMap = {},
    possibles= [],
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
     if(possibles.length < 2){
         return possibles[0]
     }else{
         return possibles.sort((a,b)=>a.length - b.length )[0]
     }
};