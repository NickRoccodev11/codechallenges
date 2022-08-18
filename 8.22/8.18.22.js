// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'






function switcheroo(x) {
    let y = x.split("")
    for (i = 0; i < y.length; i++) {
        if (y[i] === "a") {
            y[i] = "b"
        } else if (y[i] === "b") {
            y[i] = "a"
        }
    }
    return y.join("")
}