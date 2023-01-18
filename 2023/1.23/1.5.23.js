// FIBONACCI - DEMONSTRATING RECURSION AND MEMOIZATION

//as a for loop
const fib = n => {
    if (n === 0) {
        return 0
    }
    let sequence = [0, 1]

    for (i = 2; i <= n; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1])
    }
    return sequence[sequence.length - 1]
}
// recursively
const fibR = n => {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fibR(n - 1) + fibR(n - 2)
    }
}

// the problem: recursive answer is 0(2^n):
// if you want to calculate fibR(5), you end up calculating fibR(2) 3 times.
// WHAT IF WE STORED THE ANSWER???

// MEMOIZATION


function fibM(n, prev = []) {
    if (prev[n] != null) {
        return prev[n]
    }
    let result;
    if (n <= 2) {
        result = 1
    } else {
        result = fibM(n - 1, prev) + fibM(n - 2, prev)
    }
    prev[n] = result
    return result

}
