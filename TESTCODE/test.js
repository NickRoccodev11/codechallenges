const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mazeRunner(maze, directions) {
    let curPos = []
    for (i = 0; i < maze.length; i++) {
        if (maze[i].includes(2)) {
            curPos.push(i);
            curPos.push(maze[i].indexOf(2))
        }
    }
    for (i = 0; i < directions.length; i++) {
        if (directions[i] === "N") {
            curPos[0]--;
        } else if (directions[i] === "S") {
            curPos[0]++;
        } else if (directions[i] === "W") {
            curPos[1]--;
        } else if (directions[i] === "E") {
            curPos[1]++;
        }
        console.log(directions[i])
        console.log(curPos)
        if (curPos[0] < 0 || curPos[0] > maze.length - 1 ||
            curPos[1] < 0 || curPos[1] > maze.length - 1) {
            return "Dead"
        } else if (maze[curPos[0]][curPos[1]] === 1) {
            return "Dead"
        }else if (maze[curPos[0]][curPos[1]] === 3) {
            return "Finish"
        }
    }
    return "Lost"
}

var maze = [[1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 3],
[1, 0, 1, 0, 1, 0, 1],
[0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1],
[1, 2, 1, 0, 1, 0, 1]];


// console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","E","E","E"]),"finish") 
// console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]),"finish") 
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]), "dead")
console.log(mazeRunner(maze, ["N", "E", "E", "E", "E"]), "lost")
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
