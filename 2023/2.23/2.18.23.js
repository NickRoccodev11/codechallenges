// Task
// Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce 
// (or equivalent, depending on your language's naming conventions) should return a new array equivalent
//  to performing exactly 1 complete pass on the original array. 
// Your function should be pure, i.e. it should not mutate the input array.


function bubblesortOnce(a) {
    let arr = [...a]
    for(var i=0; i < a.length; i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }
    }
    return arr
  }