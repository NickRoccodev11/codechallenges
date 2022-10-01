
// Implement a function sum that accepts arrays of integers and an optional callback and returns sum of results of callback function on each 'column' of arrays. In case callback is not specified, just return the sum.

// Trivial example:

// sum([1,2,3]) => 6
//  1 + 2 + 3 = 6
// Example #1:

// sum([1,2,3], [4,5,6]) => 21
//  1   2   3
//  +   +   +
//  4   5   6
//  ↓   ↓   ↓
//  5 + 7 + 9 = 21
// Example #2:

// sum([1,2,3], [4,5,6], (a, b) => a * b)) => 32
//  1    2    3
//  *    *    *
//  4    5    6
//  ↓    ↓    ↓
//  4 + 10 + 18 = 32
// Example #3:

// sum([1,2,3], [4,5,6], [7,8,9], (a, b, c) => a * Math.pow(b, c)) => 31030722
//      1        2          3
//      *        *          *
//      (        (          (
//      4        5          6
//      ^        ^          ^
//      7        8          9
//      )        )          )
//      ↓        ↓          ↓
//  16384 + 781250 + 30233088 = 31030722
// In case arrays' lengths differ, replace non-existent values with zeroes, thus:

// sum([1], [10, 20, 30]) => 61
//   1    0    0
//   +    +    +
//  10   20   30
//   ↓    ↓    ↓
//  11 + 20 + 30 = 61
// See example tests for more.

// Input will always be VALID, i.e. at least one array (probably empty) will be passed to the function.

// Good luck and have fun!








function sum(...args) {
    //Replace empty arrays with [0]
    for (i = 0; i < args.length; i++) {
      if (typeof args[i] === "object" && args[i].length === 0) {
        args[i] = [0]
      }
    }
  
    //find the length of the longest array
    let lengthArray = args.map(el => typeof el === "object" ? el.length : false)
    let longest = 0;
    for (i = 0; i < lengthArray.length; i++) {
      longest < lengthArray[i] ? longest = lengthArray[i] : false
    }
  
    //check for the function, remove it and save to variable if present 
    // check if there is only a single array to operate on 
    let func,
      oneArray = false;
    if (typeof args[args.length - 1] === "function") {
      if (args.length === 2) {
        oneArray = true
        theOnlyArray = args[0]
      }
      func = args[args.length - 1];
      args.pop()
    }
  
    // seed arrays with zeros so they are all the same length
    //add all arrays together
    let total = 0;
    for (i = 0; i < args.length; i++) {
      if (args[i].length < longest) {
        for (j = 0; j < longest; j++) {
          if (args[i][j] === undefined) {
            args[i].push(0)
          }
        }
      }
      total += args[i].reduce((a, b) => a + b, 0)
    }
  
    //if there's no cb function, use the sum of arrays as answer
    if (!func) {
      return total
    }
  
  
    //if there is only one array...
    let singleArray = []
    if (oneArray) {
      for (i = 0; i < theOnlyArray.length; i++) {
        singleArray.push(func(theOnlyArray[i]))
      }
      return singleArray.reduce((a, b) => a + b, 0)
    }
  
  
    // if there are more than one array...
    let finalFuncArray = [],
      argsList = [],
      outer = 0,
      inner = 0;
    do {
      argsList.push(args[outer][inner])
      log("hi" + argsList)
      outer++;
      if (argsList.length === args.length) {
        finalFuncArray.push(func(...argsList))
        inner++;
        outer = 0;
        argsList = [];
      }
    } while (finalFuncArray.length !== args[0].length)
    return finalFuncArray.reduce((a, b) => a + b, 0)
  }
  