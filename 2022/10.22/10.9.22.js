// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.



function partlist(arr) {

    let contain1 = [],
        contain2 = []

    for (i = 0; i < arr.length; i++) {
        if (i > 0) {
            contain1.push(arr.slice(0, i).join(' '))
            contain1.push(arr.slice(i).join(' '))
            contain2.push(contain1)
            contain1 = []
        }
    }
    return contain2
}