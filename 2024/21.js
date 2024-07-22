function insertionSort(array) {
  for(let i = 1; i < array.length; i++){
    if(array[i] < array[i-1]){
      let j = i;
      while(j > 0){
        if(array[j] < array[j-1]){
          let temp = array[j-1];
          array[j-1] = array[j];
          array[j] = temp;
          }else{
          break;
          }
        j--;
      }
    }
  }
  return array
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
