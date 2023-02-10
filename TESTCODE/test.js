const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var letterCombinations = function (digits) {

    let phone = [[],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"]]

    let words = [],
        currW = '',
        num1, num2, num3, num4;

    if (digits.length === 0) {
        return []
    } else if (digits.length === 1) {
        num1 = parseInt(digits)
        return phone[num1]
    } else if (digits.length === 2) {
        num1 = parseInt(digits[0])
        num2 = parseInt(digits[1])

        for (i = 0; i < phone[num1].length; i++) {
            for (j = 0; j < phone[num2].length; j++) {
                currW += phone[num1][i] + phone[num2][j]
                words.push(currW)
                currW = ''
            }
        }
        return words
    } else if (digits.length === 3) {
        num1 = parseInt(digits[0])
        num2 = parseInt(digits[1])
        num3 = parseInt(digits[2])
        for (i = 0; i < phone[num1].length; i++) {
            for (j = 0; j < phone[num2].length; j++) {
                for (k = 0; k < phone[num3].length; k++) {
                    currW += phone[num1][i] + phone[num2][j] + phone[num3][k]
                    words.push(currW)
                    currW = ''
                }
            }
        }
        return words
    } else if (digits.length === 4) {
        num1 = parseInt(digits[0])
        num2 = parseInt(digits[1])
        num3 = parseInt(digits[2])
        num4 = parseInt(digits[3])

        for (i = 0; i < phone[num1].length; i++) {
            for (j = 0; j < phone[num2].length; j++) {
                for (k = 0; k < phone[num3].length; k++) {
                    for (l = 0; l < phone[num4].length; l++) {
                        currW += phone[num1][i] + phone[num2][j] + phone[num3][k] + phone[num4][l]
                        words.push(currW)
                        currW = ''
                    }

                }
            }
        }
        return words
    }

};

// log(letterCombinations(""))
// log(letterCombinations("9"))
log(letterCombinations("7979"))





//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
