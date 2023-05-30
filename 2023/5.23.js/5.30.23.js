//split string into a n array
//check if all/each val is a num. if not return 1
//sort the vals
//if we reach a val that is not in order, retunr that missing val
//to compare, start a counter at 1 and increment it at the end of each loop iteration
// if we reach the end return 0

//split string into a n array
//check if all/each val is a num. if not return 1
//sort the vals
//if we reach a val that is not in order, retunr that missing val
//to compare, start a counter at 1 and increment it at the end of each loop iteration
// if we reach the end return 0

function findMissingNumber(sequence) {
    if (sequence.length === 0){
      return 0
    }
    let numArr = sequence.split(" ")
    let compare = 1
    for (var i = 0; i < numArr.length; i++) {
      numArr[i] = Number(numArr[i])
      if (isNaN(numArr[i])) {
        return 1
      }
    }
    numArr.sort((a, b) => (a - b))
  
    for (var j = 0; j < numArr.length; j++) {
      if (numArr[j] === compare) {
        compare++;
      } else {
        return compare
      }
    }
    return 0
  }