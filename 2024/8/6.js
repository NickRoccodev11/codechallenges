function longestPeak(array) {
  const peaks = []
 for(let i = 1; i < array.length - 1; i++){
  if(array[i] > array[i-1] && array[i] > array[i+1] ){
    peaks.push(i)
  }
 }
   let longest = 0;
   let range = 0;
   
   peaks.forEach((peak) => {
     let left = peak - 1;
     let right = peak +1;
     while( (left >= 0) &&  array[left] < array[left + 1]){
       range++;
       left--;
     }
     while( (right <= array.length -1) && array[right] < array[right - 1]){ 
       range++;
       right++;
     }
     if (range > longest ){
       longest = range;
       range = 0;
     }else{
       range = 0;
     }
   })
  
  return longest ? longest + 1 : 0
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
