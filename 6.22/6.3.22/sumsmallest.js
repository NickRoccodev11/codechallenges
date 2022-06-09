
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//  No floats or non-positive integers will be passed.


// function sumTwoSmallestNumbers(numbers) {  
//     return numbers.sort((a,b)=> a-b)[0]+ numbers.sort((a,b)=> a-b)[1]
//     }

function transpose(matrix) {
let newArr = []
for(i=0;i<matrix.length;i++){
    newArr.push([])
    for(j=0;j<matrix[i].length;j++){
        newArr.push(matrix[i][j])
    }
}
log(newArr)
}

transpose([[1,2,3],[4,5,6]])