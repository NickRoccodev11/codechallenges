// Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:

// the first two digits of 1176 form a prime.
// the first two digits of the square 1382976 also form a prime.
// the last two digits of 1176 and 1382976 are the same.
// Given two numbers representing a range (a, b), 
// how many numbers satisfy this property within that range? (a <= n < b)


function solve(a, b) {
    let satisfied = 0;
    let primes = ["11", "13", "17", "19", "23", "29", "31", "37",
        "41", "43", "47", "53", "59", "61", "67", "71", "73",
        "79", "83", "89", "97"]
    for (i = a; i <= b; i++) {
        let num = i.toString();
        let sqr = (i * i).toString();
        if (num.slice(num.length - 2) === sqr.slice(sqr.length - 2)) {
            if (primes.includes(num.slice(0, 2)) &&
                primes.includes(sqr.slice(0, 2))) {
                satisfied++
            }
        }
    }
    return satisfied;
}



// TASK 2
// An isogram is a word that has no repeating letters, consecutive 
// or non-consecutive. Implement a function that determines whether 
// a string that contains only letters is an isogram. Assume 
// the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

const isIsogram = str => new Set(str.toLowerCase()).size === str.length

// Task 3

// You are given an input (n) which represents the amount of lines you are given.
// Your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.
function maxBisectors(n) {
    let bisec = 0,
        increment = 0;

    for (i = 1; i <= n; i++) {
        bisec += increment;
        if ( i === 1 ||
             i % 2 !== 0) {
            increment++
        }
    }
    return bisec;
}