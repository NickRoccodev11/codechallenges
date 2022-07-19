// Calculate how many times a number can be divided by a given number.

// Example
// For example the number 6 can be divided by 2 two times:

// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1

const divisions = (n, divisor) => {
    if (divisor > n) {
        return 0
    }
    let divisionNumber = 0;
    while (n > 1) {
        n = Math.floor(n / divisor)
        if (n >= 1) {
            divisionNumber++;
        }
    }
    return divisionNumber;
};


