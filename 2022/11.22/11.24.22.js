// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], 
// determine if it is possible to form a Pythagorean Triple using those 3 integers.

// A Pythagorean Triple consists of arranging 3 integers, such that:

// a2 + b2 = c2




function isPythagoreanTriple(integers) {
    let sq = integers.map(el => el * el)
    if (sq[0] + sq[1] === sq[2] ||
        sq[0] + sq[2] === sq[1] ||
        sq[2] + sq[1] === sq[0]) {
        return true
    }
    return false
}