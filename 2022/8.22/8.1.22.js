//
// Return the number of unique arrays that can be formed by picking exactly
//  one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, 
// because it results in only 4 possibilites. 
// They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

let solve = arr => arr.map(subArr => new Set(subArr)).reduce((a, c) => c.size * a, 1)


//OR EVEN...

let solve2 = arr => arr.reduce((a, c) => new Set(c).size * a, 1)


// log(
//     solve2([[1, 2], [4, 4], [5, 6, 6]]),
//     solve2([[1, 2], [4, 4], [5, 6, 6]]),
//     solve2([[1, 2], [3, 4], [5, 6]]),
//     solve2([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]))
// log("4,4,8,72")