// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"


function collatz(n) {
    let collatzChain = n.toString()
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
            collatzChain += "->" + n;
        } else {
            n = n * 3 + 1;
            collatzChain += "->" + n
        }
    }
    return collatzChain
}