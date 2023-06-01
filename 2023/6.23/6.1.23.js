
// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.





function solve(arr) {
 let newA = []
  arr.reverse();
  for(i=0;i<arr.length; i++){
    !newA.includes(arr[i]) ? newA.unshift(arr[i]) : null
  }
 return newA
}