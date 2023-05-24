// this solution is not finished
//currently, it goes directly to each turn rather than stopping to examine at each new coordinate

// function turnsOnRoad(x, y) {
//     let direction = "r";
//     let currentX = 0, currentY = 0
//     let add = 1, turns = 0
//     while (currentX !== x || currentY !== y) {
//       if (direction === "r") {
//         currentX += add
//         direction = "u"
//         turns++
//         log(`turn # ${turns} coords: [${currentX},${currentY}] direction is now ${direction}`)
//       } else if (direction === "u") {
//         currentY += add
//         direction = "l"
//         add++
//         turns++
//         log(`turn # ${turns} coords: [${currentX},${currentY}] direction is now ${direction}`)
//       } else if (direction === "l") {
//         currentX -= add
//         direction = "d"
//         turns++
//         log(`turn # ${turns} coords: [${currentX},${currentY}]direction is now ${direction}`)
//       } else if (direction === "d") {
//         currentY -= add
//         direction = "r"
//         add++
//         turns++
//         log(`turn # ${turns} coords: [${currentX},${currentY}]direction is now ${direction}`)
//       }
//     }
//     return turns
//   }
//   log(turnsOnRoad(12,-3))


// This version is closer. it works on my machine but is timing out in codewars...

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
        log(`turn # ${turns} coords: [${currentX},${currentY}] direction is now ${direction}`)
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
        log(`turn # ${turns} coords: [${currentX},${currentY}] direction is now ${direction}`)
      } else if (direction === "l") {
        for(i=0; i< add; i++){
            currentX -= 1
            if (currentX === x && currentY === y){
                return turns
            }
        }
        direction = "d"
        turns++
        log(`turn # ${turns} coords: [${currentX},${currentY}]direction is now ${direction}`)
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
        log(`turn # ${turns} coords: [${currentX},${currentY}]direction is now ${direction}`)
      }
  
  
    }
    return turns
}
//   }
//   log(turnsOnRoad(12,-3))