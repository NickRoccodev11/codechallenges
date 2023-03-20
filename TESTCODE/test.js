const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode
// Parameters - clarify all possibilities for params. think of edge cases. 
//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 
//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:
//1 Break your algorithm/function into individual operations
//2 Calculate the Big O of each operation
//3 Add up the Big O of each operation together
//4 Remove the constants
//5 Find the highest order term — this will be what we consider the Big O of our algorithm/function
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function span(arr, predicate) {
    let until = [],
        fail = false,
        after = [];
    for (i = 0; i < arr.length; i++) {
        while (!fail) {
            if (predicate(arr[i])) {
                until.push(arr[i])
            } else {
                fail = true
            }
        }
        after.push(arr[i])
    }
    return [until, after]
}

let arr = [2,4,6,1,8,10,12]
let predicate = (x) => {
    return Math.abs(x) % 2 === 0;
  }

  log(span(arr,predicate))
