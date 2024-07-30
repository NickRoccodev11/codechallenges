function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a,b)=> a-b)
  arrayTwo.sort((a,b)=> a-b)
  let sD = Infinity;
  let pair = [];
  let a1 = 0
  let a2 = 0
  while (a1 < arrayOne.length && a2 < arrayTwo.length){
    let diff = Math.abs(arrayOne[a1] - arrayTwo[a2])
    if(diff === 0){
      return [arrayOne[a1], arrayTwo[a2]]
    }else if(diff < sD){
      sD = diff;
      pair = [arrayOne[a1],arrayTwo[a2]];
    }
    if(a1 < arrayOne.length -1 && a2 < arrayTwo.length - 1){
      if(arrayOne[a1] < arrayTwo[a2]){
        a1++
      }else{
        a2++
      }
    }else if(a1 === arrayOne.length -1){
      a2++
    }else{
      a1++
    }
  }
  return pair
}
