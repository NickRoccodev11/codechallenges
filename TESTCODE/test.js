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

function common(a, b, c) {
  let map = {}
  for (const nums of a) {
    if (!map[nums]) {
      if (b.includes(nums) && c.includes(nums)) {
        map[nums] = 1;
        b.splice(b.indexOf(nums), 1)
        c.splice(c.indexOf(nums), 1)
      }
    } else {
      if (b.includes(nums) && c.includes(nums)) {
        map[nums]++
      }
    }
  }
  let objKeys = Object.keys(map)
  let objvals = Object.values(map)
  let sum = 0
  for (i = 0; i < objKeys.length; i++) {
    sum += Number(objKeys[i]) * objvals[i]
  }
  return sum
}

console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]))

// day 2: this particular solution does not account for some cases. It may be the mutating of the original arrays causing it. 