

let log = console.log
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, consider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function mergeArrays(...arrays) {
//     let jointArray = []
//         arrays.forEach(array=>{
//             jointArray = [...jointArray, ...array]
//         })
//         return [...new Set(jointArray)]
// }


// function mergeArrays2() {
//     let arrays = Array.from(arguments);
//     console.log(arrays)
//    // some more code here
// }

// function mergeArrays(...arrays) {
//     let jointArray = []

//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     })
//     const uniqueArray = jointArray.filter((item,index) =>  jointArray.indexOf(item) === index )
//     return uniqueArray
// }




// log(mergeArrays([1, 2, 3, 3, 6, 7, 3], [1, 4, 5, 2], [5,3],[8,8,8,8], [9,1,2,3,4,5])) // should return [1,2,3,4,5]

function falsyBouncer(arr){
    return arr.filter(el=> el  )
}


log(falsyBouncer([1, 0, null, '', 5, "hello", NaN])) // should return [1,5]




///////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
