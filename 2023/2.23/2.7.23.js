//validate a sudoku puzzle, presented as a 2d array

function validateSudoku(board) {
    if (board.includes(0)) {
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
                return false
            }
            if (board[i].reduce((a, b) => a + b, 0) !== 45) {
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
        let boxSet = new Set(boxes[box]);
        if (boxSet.size !== 9) {
            return false
        }
        if (boxes[box].reduce((a, b) => a + b, 0) !== 45) {
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


log(validateSudoku(puzzleL))
log(validateSudoku(puzzleW))