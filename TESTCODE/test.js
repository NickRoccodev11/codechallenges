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
function turnsOnRoad(x, y) {
  let direction = "r";
  let currentX = 0, currentY = 0
  let add = 1, turns = 0
  while (turns < 1000000) {
    if (direction === "r") {
      for(i=0; i< add; i++){
          currentX += 1
          if (currentX === x && currentY === y){
              return turns
          }
      }
      direction = "u"
      turns++
      // log(`turn # ${turns} coords: [${currentX},${currentY}] direction is now ${direction}`)
    } else if (direction === "u") {
      for(i=0; i< add; i++){
          currentY += 1
          if (currentX === x && currentY === y){
              return turns
          }
      }
      direction = "l"
      add++
      turns++
      // log(`turn # ${turns} coords: [${currentX},${currentY}] direction is now ${direction}`)
    } else if (direction === "l") {
      for(i=0; i< add; i++){
          currentX -= 1
          if (currentX === x && currentY === y){
              return turns
          }
      }
      direction = "d"
      turns++
      // log(`turn # ${turns} coords: [${currentX},${currentY}]direction is now ${direction}`)
    } else if (direction === "d") {
      for(i=0; i< add; i++){
          currentY -= 1
          if (currentX === x && currentY === y){
              return turns
          }
      }
      direction = "r"
      add++
      turns++
      // log(`turn # ${turns} coords: [${currentX},${currentY}]direction is now ${direction}`)
    }


  }
  return turns
}
log(turnsOnRoad(0,1))