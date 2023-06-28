function findDup(arr) {
     return arr.findIndex((el,i,arr)=> arr.indexOf(el) !== arr.lastIndexOf(el) )
}
console.log(findDup([1,3,2,5,4,5,7,6]))