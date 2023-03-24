
// Given an integer n and two other values, build an array of size n filled with these two values alternating.





function alternate(n, firstValue, secondValue){
    let alt = true,
        arr =[];
    for(i=0; i<n; i++){
      if(alt){
        arr.push(firstValue)
      }else{
        arr.push(secondValue)
      }
      alt = !alt
    }
    return arr
  }