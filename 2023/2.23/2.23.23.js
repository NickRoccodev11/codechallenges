// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
    let total = 0

    for (var i = 0; i < x.length; i++) {
        if (x[i] === parseInt(x[i])) {
            total += x[i]
        } else {
            total -= parseInt(x[i])
        }
    }
    return total
}