function moveElementToEnd(array, toMove) {
  //while loop with two pointers
  //loop ends when pointers cross
  //one at the start one at the end
  //if start = toMove{
    //if end !== move{
     //;swap them
  //  }
  //else decrement end
  //}
  //else increment start
  // return array
  let start = 0;
  let end = array.length -1;
  while (start < end){
    if(array[start] == toMove){
      if(array[end] !== toMove){
        array[start] = array[end];
        array[end] = toMove
        start++;
        end--;
      }else{
        end--;
      }
    }else{
      start++;
    }
  }
  return array
}