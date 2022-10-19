// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest.
//  Sort the words with the same frequency by their lexicographical order.




/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let wordmap = {}
    let mostFrequetArray = [];
    words.sort();
    for (char of words) {
        if (!wordmap[char]) {
            wordmap[char] = 1
        } else {
            wordmap[char]++
        }
    }
    let wordArray = Object.keys(wordmap);
    let valueArray = Object.values(wordmap);
    let hiFreq = Math.max(...valueArray);
    while (mostFrequetArray.length < k) {
        for (i = 0; i < wordArray.length; i++) {
            if (valueArray[i] === hiFreq) {
                mostFrequetArray.push(wordArray[i])
                if (mostFrequetArray.length === k) {
                    return mostFrequetArray

                }
            }
        }
        hiFreq--;
    }
    return mostFrequetArray
};


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

log(uniqueSort([5, 5, 4, 3, 5, 2, 4, 1, 4, 3]))


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

log(memoize(9))
log(memoize(10))

// TASK 4 make your memoize function generic

function memoize(cb) {
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

let memoizeDub = memoize(double)
let memoizeTrip = memoize(triple)

log(memoizeDub(2)) // 4
log(memoizeTrip(2)) // 6 

// turn the joinElements recursive function into a loop

function joinElements(arr,char){
    let result='';
    for(i=0; i<arr.length; i++){
        result  += arr[i] + char
    }
    return result
}

log(joinElements(["s","cr","tcod"],"e"))

// factorial with recursion

function recursiveFactorial(n){
    if(n===1){
        return n
    }else{
        return n * recursiveFactorial(n-1)
    }
}

log(recursiveFactorial(5))

// memoize your factorial function

function memoize(cb) {
    let cache = {}
    return (n) => {
        if (!cache[n]) {
            cache[n] = cb(n)
            return cache[n]
        };
        return `${cache[n]} is the factorial of ${n}`
    }
}



function recursiceFactorial(n){
    if(n===1){
        return n
    }else{
        return n * recursiceFactorial(n-1)
    }
}

memoizedFactorial = memoize(recursiceFactorial);

log(memoizedFactorial(5))
log(memoizedFactorial(5))
log(memoizedFactorial(12))
log(memoizedFactorial(12))

