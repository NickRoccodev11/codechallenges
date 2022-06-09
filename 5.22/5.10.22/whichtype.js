

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of 
// uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.







function solve(s) {
    let upper = 0, lower = 0, number = 0, special = 0
    s.split("").map(el => {
        let counter = "";
        if (!isNaN(parseInt(el))) {
            counter += 1
        } else {
            counter += 0
        }
        if (el === el.toUpperCase()) {
            counter += 1
        } else {
            counter += 0
        }
        if (el === el.toLowerCase()) {
            counter += 1
        } else {
            counter += 0
        }

        if (counter === "010") {
            upper += 1

        } else if (counter === "001") {
            lower += 1

        } else if (counter === "111") {
            number += 1

        } else if (counter === "011") {
            special += 1

        }
       return [upper, lower, number, special]
    })
  return [upper,lower, number, special]
}