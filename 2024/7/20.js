function binarySearch(array, target) {
  let lo = 0;
  let hi = array.length - 1 ;
  while(lo <= hi){
    let mid = Math.floor((hi - lo) / 2) + lo;
    if(array[mid] === target){
      return mid
    }else if(array[mid] > target){
      hi = mid -1;
    }else{
      lo = mid + 1  
    }
  }
  return -1
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

