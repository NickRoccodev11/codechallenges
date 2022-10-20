let log = console.log
// algos tutorial: return sorted array of unique numbers

function uniqueSort(arr) {
    const unique = {};
    for (el of arr) {
        if (!unique[el]) {
            unique[el] = true
        }
    };
    return Object.keys(unique).map(el => Number(el)).sort((a, b) => a - b)
};

// log(uniqueSort([5, 5, 4, 3, 5, 2, 4, 1, 4, 3]))


/// write a function times10, that takes an argument and multiplys ten times.
const times10 = (n) => {
    return n * 10
}

// PART 2 use an object to cache the results of your times10 function 
let timesTenCache = {};
const times10Cache = (n) => {
    if (!timesTenCache[n]) {
        timesTenCache[n] = times10(n)
    }
    return timesTenCache
}

// placed the obj in the global namespace to save all cached results (avoid block scoping)
// now lets fix that
// TASK 3 clean up your global scope by moving your cache inside your function 


function memoizer10x(n) {
    let timesTenCache = {};
    return (n) => {
        if (!timesTenCache[n]) {
            timesTenCache[n] = n * 10;
        }
        return timesTenCache;
    };
};
// variable memoize holds the RETURN VALUE of our function, which is an inner function! this is CLOSURE!
const memoize10 = memoizer10x();


// TASK 4 make your memoize function generic

function memoizeA(cb) {
    let cache = {}
    return (n) => {
        if (!cache[n]) {
            cache[n] = cb(n)
            return cache[n]
        };
        return cache[n]
    }
}
let double = num => num * 2

let triple = (num) => num * 3

let memoizeDub = memoizeA(double)
let memoizeTrip = memoizeA(triple)

// log(memoizeDub(2)) // 4
// log(memoizeTrip(2)) // 6 

// turn the joinElements recursive function into a loop

function joinElements(arr, char) {
    let result = '';
    for (i = 0; i < arr.length; i++) {
        result += arr[i] + char
    }
    return result
}

// log(joinElements(["s","cr","tcod"],"e"))

// factorial with recursion

function recursiveFactorial(n) {
    if (n === 1) {
        return n
    } else {
        return n * recursiveFactorial(n - 1)
    }
}

// log(recursiveFactorial(5))

// memoize your factorial function

function memoizeB(cb) {
    let cache = {}
    return (n) => {
        if (!cache[n]) {
            cache[n] = cb(n)
            return `${n}! =  ${cache[n]} added to cache `
        };
        return `${cache[n]} is the factorial of ${n}`
    }
}

function recursiceFactorial(n) {
    if (n === 0) {
        return 1
    } else {
        return n * recursiceFactorial(n - 1)
    }
}

memoizedFactorial = memoizeB(recursiceFactorial);

// log(memoizedFactorial(5))
// log(memoizedFactorial(5))
// log(memoizedFactorial(12))
// log(memoizedFactorial(12))

// BINARY SEARCH

let sorted = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function binarySearch(arr, target) {
    let hi = arr.length,
        lo = 0,
        mid = 0
    do {
        mid = Math.floor(lo + (hi - lo) / 2)
        log(`mid is ${mid} lo is ${lo} hi is ${hi}  `)
        if (arr[mid] === target) {
            return arr[mid]
        } else if (arr[mid] > target) {
            hi = mid
        } else {
            lo = mid + 1
        }
    } while (hi > lo)
    return false
}

// log(binarySearch(sorted, 8))
// log(binarySearch(sorted, 1))
// log(binarySearch(sorted, 9))


//  MERGE SORT MERGE SORT


let unsorted = [22, 1, 9, 7, 6, 5, 3, 10, 4, 8]

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let leftSide = arr.slice(0, middle);
    let rightSide = arr.slice(middle);

    return merge(mergeSort(leftSide), mergeSort(rightSide))
}

function merge(l, r) {
    let c = [];
    while (l.length && r.length) {
        if (l[0] < r[0]) {
            c.push(l.shift());

        } else {
            c.push(r.shift());
        }
    }
    return c.concat(l.slice()).concat(r.slice())
}

// log(mergeSort(unsorted))

function bubbleSort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let x = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = x
            }
        }
    }
    return arr
}

log(bubbleSort(unsorted))
