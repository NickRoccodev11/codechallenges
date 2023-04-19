
// create the factorial func from memory


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    let total = 1
    for (i = 1; i <= n; i++) {
        total *= i
    }

    return total
}