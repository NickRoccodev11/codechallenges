// 
function turnsOnRoad(x, y) {
    let direction = "r";
    let currentX = 0, currentY = 0
    let add = 1, turns = 0
    while (currentX !== x || currentY !== y) {
      if (direction === "r") {
        currentX += add
        direction = "u"
        turns++
        log(`turn # ${turns} coords: [${currentX},${currentY}] direction is now ${direction}`)
      } else if (direction === "u") {
        currentY += add
        direction = "l"
        add++
        turns++
        log(`turn # ${turns} coords: [${currentX},${currentY}] direction is now ${direction}`)
      } else if (direction === "l") {
        currentX -= add
        direction = "d"
        turns++
        log(`turn # ${turns} coords: [${currentX},${currentY}]direction is now ${direction}`)
      } else if (direction === "d") {
        currentY -= add
        direction = "r"
        add++
        turns++
        log(`turn # ${turns} coords: [${currentX},${currentY}]direction is now ${direction}`)
      }
  
  
    }
    return turns
  }
  log(turnsOnRoad(12,-3))