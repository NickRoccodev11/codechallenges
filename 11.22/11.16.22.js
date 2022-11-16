/ You need to create a function that when provided with a triplet, 
// returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// constant time solution
const gimme1  = (trip) => {
    if (trip[0] > trip[1] && trip[0] < trip[2] ||
        trip[0] < trip[1] && trip[0] > trip[2]) {
        return 0
    } else if (trip[1] > trip[0] && trip[1] < trip[2] ||
        trip[1] < trip[0] && trip[1] > trip[2]) {
        return 1
    } else {
        return 2
    }
}

//because this problem will only ever involve 3 numbers, here is a cleaner but slower solution

const gimme2 = (trip) => {
    let compare = [...trip],
        sorted = trip.sort((a, b) => a - b)
    return compare.indexOf(sorted[1])
}

//cleaned up even further(from codewars solutions)

const gimme = (trip) => trip.indexOf(Array.from(trip).sort((a,b)=> a-b)[1])


log(gimme([2, 3, 1])) //0
log(gimme([5, 10, 14])) //1
log(gimme([75, -2, 14])) //2

