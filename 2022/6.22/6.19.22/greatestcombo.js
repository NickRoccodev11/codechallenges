


// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained



function expressionMatter(a, b, c) {
    let total = 0
    if (a * (b + c) > total) {
        total = a * (b + c);
    }
    if (a * b * c > total) {
        total = a * b * c
    }
    if (a + b * c > total) {
        total = a + b * c;
    }
    if ((a + b) * c > total) {
        total = (a + b) * c
    }
    if (a + b + c > total) {
        total = a + b + c
    }
    return total
}