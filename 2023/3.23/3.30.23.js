// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in: "I\n I\n  I"

function drawStairs(n) {
    if (n === 1) {
        return "I"
    }
    let stairs = ''
    let space = " "
    for (i = 0; i < n; i++) {
        if (i !== n - 1) {
            stairs += "I\n" + space
            space += " "
        } else {
            stairs += "I"
        }
    }
    return stairs
}