// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.


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
        if (curPos[0] < 0 || curPos[0] > maze.length - 1 ||
            curPos[1] < 0 || curPos[1] > maze.length - 1) {
            return "Dead"
        } else if (maze[curPos[0]][curPos[1]] === 1) {
            return "Dead"
        } else if (maze[curPos[0]][curPos[1]] === 3) {
            return "Finish"
        }
    }
    return "Lost"
}