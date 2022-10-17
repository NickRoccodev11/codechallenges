// algo 16 remove all falsy values from a list 


function falsyBouncer(arr){
    return arr.filter(el=> el  )
}


// log(falsyBouncer([1, 0, null, '', 5, "hello", NaN])) // should return [1,5]


//find the lowest index at which a given num can be inserted into a sorted array 

// my answer with a version of binary search 
function whereIBelong(arr, num) {
    arr.sort((a, b) => a - b)
    let lo = 0,
        hi = arr.length,
        midpoint;

    do {
        midpoint = Math.floor(lo + (hi - lo) / 2);
        if (arr[midpoint] <= num && arr[midpoint + 1] >= num) {
            return midpoint + 1
        } else if (arr[midpoint] >= num && arr[midpoint - 1] <= num) {
            return midpoint
        }
        else if (midpoint > num) {
            hi = midpoint
        } else {
            lo = midpoint + 1
        }
    } while (hi > lo)

}

// answer:  push num into array, sort, and then return indexOf num

function whereIBelong(arr, num) {
    arr.push(num)
    arr.sort((a, b) => a - b)
    return arr.indexOf(num)
}