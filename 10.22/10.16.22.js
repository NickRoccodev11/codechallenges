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


// My answer with recursion

let answer = []
function chunkArray(arr, num) {
    if (arr <= 0) {
        return answer;
    } else {
        answer.push(arr.slice(0, num));
        return chunkArray(arr.slice(num),num)

    }
}

// tutorial answer with recursion  (answer does not have to be in global name space)
function chunkArray(array, size) {
    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
 }

