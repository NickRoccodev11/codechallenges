
// Create a method none? (JS none) that accepts an array and a block (JS: a function), 
// and returns true if the block (/function) returns true for none of the items in the array.
//  An empty list should return true.


function none(arr, fun) {
    if (arr.length == 0) {
        return true
    }
    for (i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return false
        }
    }
    return true
}

//Your task is to remove all consecutive duplicate words from a string,
//  leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


const duplicate = (str) => {
    let arr = str.split(" ")
    return str.split(" ").filter((el, idx) => arr[idx] !== arr[idx - 1]).join(" ")
}

log(duplicate("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))

// this is a time you can reference the array in your cb for filter, 
// rather than creating a separate array for reference

const duplicate2 = (s) => s.split(" ").filter((el, idx, arr) => el != arr[idx-1]).join(" ")