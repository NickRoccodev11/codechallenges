// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
    let y = x.map(el => parseInt(el))
    return y.reduce((a,b) => a+b)
    }