// Given a string containing digits from 2-9 inclusive, return all possible letter 
// combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) 
// is given below. Note that 1 does not map to any letters.


// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

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
