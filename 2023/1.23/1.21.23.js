
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


//pretty close... here is bubblesort with an exit clause optimization
//(if no values are switched after an entire j loop, you're done)


const bubbleSort2 = (array) => {
    let switched;
    for (i = 0; i < array.length; i++) {
        switched = false;
        for (j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let switcher = array[j];
                array[j] = array[j + 1],
                    array[j + 1] = switcher
                switched = true
            }
        }
        if (!switched) {
            return array
        }
    }
    return array
}


// greedy


const greedy = (owed) => {
    // 25,10, 5
    let payout = 0,
        coins = 0;

    while (payout < owed) {
        if (owed - payout >= 25) {
            payout += 25
            coins++
        } else if (owed - payout >= 10) {
            payout += 10
            coins++
        } else {
            payout += 5
            coins++
        }
    }
    return coins
}

// what if coin values are 1,6, 10?

const unGreedy = (owed) => {
    // 1,6,10
    let payout = 0,
        coinArr = [],
        compare = [1, 6, 10];

    coinArr.push(owed)

    let sixes = Math.floor(owed / 6),
        sixLeftovr = owed % 6,
        sixChoices = [];
    for (i = 0; i < compare.length; i++) {
        if ((sixLeftovr / compare[i]) % 1 === 0) {
            sixChoices.push(sixLeftovr / compare[i])
        }
    }
    coinArr.push(sixes + Math.min(...sixChoices))
    let tens = Math.floor(owed / 10),
        tenLeftovr = owed % 10;
    log(tenLeftovr + "leftover")
    let tenChoices = [];
    for (i = 0; i < compare.length; i++) {
        if ((tenLeftovr / compare[i]) % 1 === 0) {
            tenChoices.push(tenLeftovr / compare[i])
        }
    }
    coinArr.push(tens + Math.min(...tenChoices))
    return Math.min(...coinArr)

}

// QUIKSORT

const quikSort = (array) => {
    if (array.length === 1) {
        return array
    }
    let pivot = array[array.length - 1];
    let left = [];
    let right = []

    for (i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    if (left.length > 0 && right.length > 0) {
        return [...quikSort(left), pivot, ...quikSort(right)];
    } else if (left.length > 0) {
        return [...quikSort(left), pivot];
    } else {
        return [pivot, ...quikSort(right)];
    }
}

log(quikSort([-5, -9, 20, 56, 3, -100, 69, 57, 100, 1000, 456, -5, -1000, 56]))
