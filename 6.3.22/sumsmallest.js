
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//  No floats or non-positive integers will be passed.


function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b)=> a-b)[0]+ numbers.sort((a,b)=> a-b)[1]
    }