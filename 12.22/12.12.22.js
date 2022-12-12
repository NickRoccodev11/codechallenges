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