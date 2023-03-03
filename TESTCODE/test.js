const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let textS = []
    let textT = []

    for(var i = 0; i < s.length; i++){
        if(s[i] === "#" && textS.length > 0 ){
            textS.pop()
        }else if (s[i] !== "#" ){
            textS.push(s[i])
        }
    }
    for(var i = 0; i < t.length; i++){
        if(t[i] === "#" && textT.length > 0 ){
            textT.pop()
            log(`popped: textT = ${textT}`)
        }
        if (t[i] !== "#" ){
            log(`i= ${i} letter: ${t[i]}`)
            textT.push(t[i])
            log(` post push: ${textT} i= ${i}`)
        }
    }
// log(textS)
log(textT)
return textS.join("") === textT.join("")

};

log(backspaceCompare("rmp","rmu#p"))
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
