
// given an array of strings and numbers, sum the array and return a number


function sumMix(arr){
    return arr.reduce((acc,cur)=> Number(cur) + acc, 0 )
}


log(sumMix([9, 3, '7', '3']))