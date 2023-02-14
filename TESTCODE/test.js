const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
    let subMatrix = []

    for (i = 0; i < matrix.length; i++) {
        while (rowsToDelete.includes(i)) {
            if(i=== matrix.length-1){
                return subMatrix
            }
            i++
        }
        subMatrix.push([]);
            for (j = 0; j < matrix[i].length; j++) {
            
            if (!columnsToDelete.includes(j)) {
                subMatrix[subMatrix.length-1].push(matrix[i][j])
            }
            log(subMatrix)
        }
    }
    return subMatrix
}



log(constructSubmatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [0], [2]))


//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
