// A square matrix is said to be an X-Matrix if both of the following conditions hold:

// All the elements in the diagonals of the matrix are non-zero.
// All other elements are 0.
// Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.

// var matrix = [
//     [1, 0, 0, 4],
//     [0, 6, 7, 0],
//     [0, 10, 11, 0],
//     [13, 0, 0, 16]
// ];

// 1  0  0  0  0  0  0  1
// 0  1  0  0  0  0  1  0
// 0  0  1  0  0  1  0  0
// 0  0  0  1  1  0  0  0
// 0  0  0  1  1  0  0  0
// 0  0  1  0  0  1  0  0
// 0  1  0  0  0  0  1  0
// 1  0  0  0  0  0  0  1

// to keep track:
// start= 0
// finish = grid.length-1
// loop inside a loop (i, j)
// as you iterate, if it's not start or finish, it must be zero
// at the end of each j loop:
//start++, finish--; 

var checkXMatrix = function (grid) {
    let start = 0;
    let end = grid.length - 1;

    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (j === start || j === end) {
                if (grid[i][j] === 0) {
                    return false;
                }
            } else {
                if (grid[i][j] !== 0) {
                    return false;
                }
            }
        }
        start++;
        end--;
    }
    return true;
};
