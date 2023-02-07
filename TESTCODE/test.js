const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Try without recursion first and then get fancy. This problem really needs to be written out. Grab some paper! 

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
let puzzleW = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]]

let puzzleL = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9]]

// each subbarray
// the same index of every subArr
//TOP BOXES
//arr[0][0] - arr[0][2] x arr[2][0] - arr[2][2]       BOX left
//arr[0][3] - arr[0][5] x arr[2][3] - arr [2][5]      BOX mid
//arr[0][6]-  arr[0][8] X arr[2][6] - arr [2][8]      BOX right

// MID BOXES
// 3.0 - 3.2 X 5.0 - 5.2 left
// 3.3 - 3.5 X 5.3 - 5.5  mid
// 3.6 - 3.8 X 5.6 - 5.8 right

//Bottom
// 6.0 - 6.2 x 8.0 - 8.2  l 
// 6.3 - 6.5 x 8.3 - 8.5  m 
// 6.6 - 6.8 x 8.6 - 8.8  r

// if any zeros, false
// if any subarray, false
// if any index, false 
// 
function validateSudoku(board) {
    if (board.includes(0)) {
        log('#1')
        return false
    }
    boxes = {
        tl: [],
        tm: [],
        tr: [],
        ml: [],
        mm: [],
        mr: [],
        bl: [],
        bm: [],
        br: []
    };
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board.length; j++) {
            let rowSet = new Set(board[i])
            if (rowSet.size !== 9) {
               log('#2')
                return false
            }
            if (board[i].reduce((a, b) => a + b, 0) !== 45) {
                log('#3')
                return false
            }
            if (i <= 2) {
                if (j <= 2) {
                    boxes.tl.push(board[i][j])
                } else if (j > 2 && j <= 5) {
                    boxes.tm.push(board[i][j])
                } else {
                    boxes.tr.push(board[i][j])
                }
            } else if (i > 2 && i <= 5) {
                if (j <= 2) {
                    boxes.ml.push(board[i][j])
                } else if (j > 2 && j <= 5) {
                    boxes.mm.push(board[i][j])
                } else {
                    boxes.mr.push(board[i][j])
                }
            } else {
                if (j <= 2) {
                    boxes.bl.push(board[i][j])
                } else if (j > 2 && j <= 5) {
                    boxes.bm.push(board[i][j])
                } else {
                    boxes.br.push(board[i][j])
                }
            }
        }
    }
    for (box in boxes) {
        log(boxes[box])
        let boxSet = new Set(boxes[box]);
        if (boxSet.size !== 9) {
            log(boxSet)
            log('#4')
            return false
        }
        if (boxes[box].reduce((a, b) => a + b, 0) !== 45) {
            log('#5')
            return false
        }
    }
    let columns = {}
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            if (!columns[j]) {
                columns[j] = board[i][j]
            } else {
                columns[j] += board[i][j]
            }
        }
    }
    for (col in columns) {
        if (columns[col] !== 45) {
           
            return false
        }
    }

    return true;
}
log(validateSudoku(puzzleL))
log(validateSudoku(puzzleW))

// let test = {
//     dog: []
// }

// test.dog.push("hi")
// log(test)
// log(test.dog)
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
