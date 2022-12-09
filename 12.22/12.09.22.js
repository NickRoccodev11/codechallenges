// DESCRIPTION:
// Context
// The Explosive Ordinance Disposal Unit of your country has found 
// a small mine field near your town, and is planning to perform a controlled detonation of all of the mines.
//  They have tasked you to write an algorithm that helps them find all safe spots in the area, as they
//   want to build a temporal base in the area where all workers can rest safely.

// // All mines they found are of a special kind, as they only release explosive charge 
// in four straight lines, each pointing at a different cardinal point (north, south, east and west). 
// However, the charge stops spreading when it crosses a tree in its path because the charge is not strong 
// enough to burn them.

// In the following diagram, M represents a mine, C represents the explosive charge
//  released after its detonation, and T are the trees in the area:

// . . . . . . .    . . . . . . .
// . . . T . . .    . . . T . . .
// . . . . . . .    . . . C . . .
// . . T M . . . => . . T M C C C
// . . . . . . .    . . . C . . .
// . . . . . . .    . . . C . . .
// . . . T . . .    . . . T . . .
// Task
// Write an algorithm that, given a mine field represented as an array of 
// arrays of size M * N, returns an array of all safe positions where workers
//  can build their temporal base. As in the previous model, 'M' represents mines, 
//  'T' represents trees, and '.' represents empty spaces where explosive charge can spread.
//   The positions in the array should be in "reading order" (from left to right, and from up to down).

// For example:

// [
//   ['.', '.', '.', '.', 'M'],                      . . . . M                           C C C C M
//   ['.', 'M', '.', 'T', '.'],                      . M . T .                           C M C T C
//   ['.', '.', 'T', '.', '.'],   ==[represents]=>   . . T . .   ==[after explosion]=>   . C T . C
//   ['.', '.', 'M', '.', 'T'],                      . . M . T                           C C M C T
//   ['.', '.', '.', '.', '.']                       . . . . .                           . C C . .
// ]
// This should return one of the two following arrays, depending on the language.
//  Check sample test cases for more information. Also, trees don't count as safe positions.

// [(2,0), (2,3), (4,0), (4,3), (4,4)] //For Python
// [[2,0], [2,3], [4,0], [4,3], [4,4]] //For JS and other languages
// Return an empty array if there are no safe positions.

// Note
// // Mines will not stop explosive charge from spreading as trees do, 
// and explosive charge won't erase mines it finds in its path. 
// Make sure you never override any mines in the field.


function safe_mine_field(mine_field) {
    let safeSpace = [],
        scan = 1,
        stop = false
    for (i = 0; i < mine_field.length; i++) {
        for (j = 0; j < mine_field[i].length; j++) {
            if (mine_field[i][j] === "M") {
                //up
                while (i - scan >= 0 && !stop) {
                    if (mine_field[i - scan][j] === ".") {
                        mine_field[i - scan][j] = "C"
                    } else if (mine_field[i - scan][j] === "T") {
                        stop = true
                    }
                    scan++
                }
                scan = 1;
                stop = false;
                //down 
                while (i + scan < mine_field.length && !stop) {
                    if (mine_field[i + scan][j] === ".") {
                        mine_field[i + scan][j] = "C"
                    } else if (mine_field[i + scan][j] === "T") {
                        stop = true
                    }
                    scan++
                }
                scan = 1;
                stop = false;
                //left
                while (j - scan >= 0 && !stop) {
                    if (mine_field[i][j - scan] === ".") {
                        mine_field[i][j - scan] = "C"
                    } else if (mine_field[i][j - scan] === "T") {
                        stop = true
                    }
                    scan++
                }
                scan = 1;
                stop = false;
                //right
                while (j + scan < mine_field[i].length && !stop) {
                    if (mine_field[i][j + scan] === ".") {
                        mine_field[i][j + scan] = "C"
                    } else if (mine_field[i][j + scan] === "T") {
                        stop = true
                    }
                    scan++
                }
                scan = 1;
                stop = false;
            }
        }
    }
    console.table(mine_field)
    for (i = 0; i < mine_field.length; i++) {
        for (j = 0; j < mine_field[i].length; j++) {
           console.log(i,j)
            if (mine_field[i][j] === ".") {
                safeSpace.push([i, j])
            }
        }
    }
    return safeSpace
}



var field = [
    ['.', '.', 'T', '.', '.', '.', 'M'],
    ['.', 'T', '.', '.', '.', 'M', '.'],
    ['.', '.', 'M', '.', 'M', '.', '.'],
    ['.', 'M', '.', '.', '.', 'T', '.'], 
    ['M', '.', '.', '.', 'T', '.', '.']
  ];
log(safe_mine_field(field), [[0,1], [4,5] ] );