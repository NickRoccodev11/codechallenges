const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 
// 
//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////




function compose(s1, s2) {
    let arr1 = s1.split("\n"),
        arr2 = s2.split("\n").reverse(),
        temp = '',
        newStr = []
// log(arr1)
// log(arr2)
    for (var i = 0; i < arr1.length; i++) {
      log("round", i)
        temp = arr1[i].slice(0, i + 1) + arr2[i].slice(0)
        temp = temp.slice(0,arr1.length+1)
        log(temp)
        newStr.push(temp)
    }

    return newStr.join("\n")

}

log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"))


let str = "doggy"
str.length = 3

log(str)

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
