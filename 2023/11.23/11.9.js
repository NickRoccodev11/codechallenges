// You are given an array of 6-faced dice. Each die is represented by its face up.

// Calculate the minimum number of rotations needed to make all faces the same.

// 1 will require one rotation to have 2, 3, 4 and 5 face up, but would require two rotations to make it the face 6, as 6 is the opposite side of 1.

// The opposite side of 2 is 5 and 3 is 4.


function rotations(dieArray){
    if(dieArray.length===0) return 0
    let possibilities = []
    let turns = 0
    for(i=0;i<dieArray.length;i++){
      for(j=0; j<dieArray.length; j++){
        if(dieArray[i] !== dieArray[j]){
          if(dieArray[i]===1){
            dieArray[j] === 6 ? turns +=2 : turns++
          }else if(dieArray[i]===2){
            dieArray[j] === 5 ? turns +=2 : turns++
          }else if(dieArray[i]===3){
            dieArray[j] === 4 ? turns +=2 : turns++
          }else if(dieArray[i]===4){
            dieArray[j] === 3 ? turns +=2 : turns++
          }else if(dieArray[i]===5){
            dieArray[j] === 2 ? turns +=2 : turns++
          }else if(dieArray[i]===6){
            dieArray[j] === 1 ? turns +=2 : turns++
          }
        }
      }
      possibilities.push(turns)
      turns = 0
    }
    return Math.min(...possibilities)
  }