// CHUNK ARRAY (cut array into smaller sub array portions by given number)
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// // should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]


//REMEMBER : SLICE SECOND ARGUMNENT IS INCLUSIVE (slice(0,2) ===  [0,1,2])

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function chunkArray(arr, num) {
    let answer = [];
    let arrIsPushed = false
    do {
        if (arr.length > num) {
            answer.push(arr.slice(0, num));
            arr = arr.slice(num)
        } else {
            answer.push(arr.slice(0, arr.length));
            arrIsPushed = true;
        }
    } while (!arrIsPushed)
    return answer
}

// log(chunkArray(arr, 5), "[[1,2,3,4,5][6,7,8,9,10][11,12,13]]")
// log(chunkArray([1, 2, 3, 4], 5), "[[1,2,3,4]]")
// log(chunkArray([1, 2, 3, 4, 5, 6], 2), "[[1,2][3,4][5,6]]")
