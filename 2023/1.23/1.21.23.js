
//FROM MEMORY!!!
const binarySearch = (arr, val) => {
    let lo = 0,
        hi = array.length,
        mid
    while (hi > lo) {
        mid = Math.floor(lo + (hi - lo) / 2)
        if (arr[mid] === val) {
            return `${val} is at index ${mid}`
        } else if (arr[mid] > val) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return -1
}


let array = [1, 3, 5, 6, 8, 9, 13, 15, 16, 17, 18, 21, 24, 27, 29, 32, 36, 38, 44, 56, 78, 95, 102, 107, 109, 300]
log(binarySearch(array, 78))
log(binarySearch(array, 7))
log(binarySearch(array, 36))
log(binarySearch(array, 4))

// NOW MEMORIZE MERGESORT

const mergeSplitter = (array) => {
    if (array.length <= 1) {
        return array
    }
    let middle = Math.floor(array.length / 2),
        left = array.slice(0, middle),
        right = array.slice(middle);
    return mergeSort(mergeSplitter(left), mergeSplitter(right))
}

const mergeSort = (left, right) => {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return sortedArr.concat(left.slice()).concat(right.slice())
}

// my guess at how bubblesort works
// i was pretty close! but if you do nested for loops, than you can set the condition for j to
// be (j < array.length - 1 - i)    

const bubbleSort = (array) => {
    let changed = true

    while (changed) {
        changed = false;
        for (i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                changed = true;
                let placeHolder = array[i]
                array[i] = array[i + 1]
                array[i + 1] = placeHolder
            }
        }
    }
    return array
}


log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))