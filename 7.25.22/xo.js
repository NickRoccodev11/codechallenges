// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false






function XO(str) {
    let xCount = 0,
        oCount = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === "x" || str[i] === "X") {
            xCount++;
        } else if (str[i] === "o" || str[i] === "O") {
            oCount++;
        }
    }
    return xCount === oCount
}


function isPrime(num) {
    if (num <= 1) {
        return false
    }
    if (num === 2 || num === 3) {
        return true
    } else if (num % 2 === 0) {
        return false
    }
    let counter = 0;
    for (i = 1; i < Math.ceil(num / 2); i++) {
        if (i % num === 0) {
            log(i,counter)
            counter++;
        }
      if (counter > 1){
        return false
      }
      return true
    }
}

isPrime(75)

