// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

let examp = "WhEoJfjjF"
//[0,2,4,8]

function capFinder(str) {
    let capArray = []
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            capArray.push(str.indexOf(str[i]))
        }
    }
    return capArray
}
capFinder(examp)