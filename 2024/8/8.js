//O(n)ST
function firstDuplicateValue(array) {
  const vals = {};
  for(el of array){
    if(!vals[el]){
      vals[el] = 1
    }else{
      return el
    }
  }
  return -1;
}

//O(n) T,  O(1) S
function firstDuplicateValue2(array) {
  for(let i = 0 ; i < array.length; i++){
    let index = Math.abs(array[i]) - 1 ;
    if(array[index] < 0){
      return Math.abs(array[i])
    }else{
      array[index] = -Math.abs(array[index])
    }
  }
    return -1;
  }
  