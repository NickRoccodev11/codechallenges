// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

const duplicates = arr => {
    let seen = [],
        answer = [];
    for (i = 0; i < arr.length; i++) {
        if (!seen.includes(arr[i])) {
            seen.push(arr[i])
        } else {
            if (!answer.includes(arr[i])) {
                answer.push(arr[i])
            }
        }
    }
    return answer
}

// can we improve upon this?
// we are doing an includes method inside of a for loop (nested iteration)
//second try

const duplicates2 = arr => {
    let map = {},
        final = [],
        strings = [],
        zero = false;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].toString() === arr[i]) {
            if (strings.includes(arr[i])) {
                if (!final.includes(arr[i])) {
                    final.push(arr[i])
                    continue;
                }
            } else {
                strings.push(arr[i])
                continue;
            }
        } else if (arr[i] === 0) {
            if (!zero) {
                zero = true
                continue;
            } else {
                final.push(0)
                continue;
            }
        }
 if (!map[arr[i]]) {
            map[arr[i]] = arr[i]
        } else {
            if (map[arr[i]] === arr[i] && !final.includes(arr[i])) {
                final.push(arr[i])
            }
        }
    }
    return final
}

//problem with this try: verifying strings mixed with nums causes issues when using a hashmap. 
//zero equates to false. I had to make special clauses for these cases, which meant doing a loop inside a loop again,
// this may be technically faster in genral, but worst case scenario is same as first try