function mergeOverlappingIntervals(array) {
  array.sort((a,b)=> a[0] - b[0])
  const merged = [array[0]];
  for(let i = 1; i < array.length; i++){
    console.log(i)
    let last =  merged.length -1 
    if(array[i][0] <= merged[last][1]){
      merged[last][1] =  Math.max(merged[last][1], array[i][1]) 
      console.log(i, merged)
    }else{
      merged.push(array[i])
      console.log(i, merged)
    } 
  }
  return merged;
}
