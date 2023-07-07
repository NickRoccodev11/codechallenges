// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

// And then sort array in descending order.

// Finally, use the separator ">" to connect the elements into a string.

// Don't complain about the situation like 1>1 is not reasonable, it is just a separator.
//flatten a 2D array:
// iterate through outer aray and concat() each inner to a separate variable
//sort this array (a,b)=> b - a; 
// use array.join("<")

function bigToSmall(arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        newArr = newArr.concat(arr[i])
    }
    newArr.sort((a, b) => b - a);
    return newArr.join(">")
}