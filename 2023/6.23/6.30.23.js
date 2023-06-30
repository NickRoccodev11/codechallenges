// Task
// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

// Note: There is no newline in the end (after the pattern ends)

// Examples
// pattern(3) should return "1\n1*2\n1**3", e.g. the following:

// 1
// 1*2
// 1**3


function pattern(n) {
    if (n === 1) {
        return n
    }
    let ladder = "1\n"
    let star = ""
    for (i = 2; i <= n; i++) {
        star += "*";
        if (i !== n) {
            ladder += "1" + star + i + "\n"
        } else {
            ladder += "1" + star + i
        }
    }
    return ladder
}