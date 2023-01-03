// You are given an two arrays 
// with the rank and file of a king and knight. ([2,"F"], [3,"C"]
// return the winner



function knightVsKing(knightPosition, kingPosition) {
    if (Math.abs(kingPosition.join("").charCodeAt(1) - knightPosition.join("").charCodeAt(1)) === 1 ||
      Math.abs(kingPosition.join("").charCodeAt(1) - knightPosition.join("").charCodeAt(1)) === 0) {
      if (Math.abs(kingPosition[0] - knightPosition[0]) === 1 ||
        Math.abs(kingPosition[0] - knightPosition[0]) === 0) {
        return "King"
      }
    }
    if (Math.abs(knightPosition.join("").charCodeAt(1) - kingPosition.join("").charCodeAt(1)) === 1
      && Math.abs(knightPosition[0] - kingPosition[0]) === 2) {
      return "Knight"
    } else if (
      Math.abs(knightPosition.join("").charCodeAt(1) - kingPosition.join("").charCodeAt(1)) === 2
      && Math.abs(knightPosition[0] - kingPosition[0]) === 1) {
      return "Knight"
    } else {
      return "None"
    }
  }