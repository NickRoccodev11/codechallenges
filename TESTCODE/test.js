const log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function lastSurvivors(str) {
    let strArr = str.split('').sort(),
        run = true;

    while (run) {
        for (i = 0; i < strArr.length; i++) {
            if (strArr[i] === strArr[i + 1]) {
                if (strArr[i] === "z") {
                    front = strArr.slice(0, i)
                    end = strArr.slice(i + 2)
                    strArr = front.concat(end)
                    strArr.push("a")
                } else {
                    newLetter = strArr[i].charCodeAt(0) + 1
                    front = strArr.slice(0, i)
                    end = strArr.slice(i + 2)
                    strArr = front.concat(end)
                    strArr.push(String.fromCharCode(newLetter))
                }
            }
        }

        let compare = new Set(strArr);
        if (compare.size === strArr.length) {
            run = false
        } else {
            strArr.sort()
        }
    }
    return strArr.join('')
}

log(lastSurvivors("zzbbnlllljhjm"))


//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
