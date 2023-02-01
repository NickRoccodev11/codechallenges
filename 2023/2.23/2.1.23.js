
// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.




function pairZeros(arr) {
    let keep = true,
        answer = [];
    
    for(i=0; i<arr.length; i++){
      if(arr[i]===0){
        if(keep){
          answer.push(arr[i])
          keep = false
        }else{
          keep = true
        }
      }else{
        answer.push(arr[i])
      }
    }
    return answer
  }