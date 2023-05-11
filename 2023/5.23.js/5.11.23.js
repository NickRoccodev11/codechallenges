
// Define a method/function that removes from a given array of integers all the values contained in a second array.




Array.prototype.remove_ = function(i, v){
    return i.filter((e,i,a)=>!v.includes(e)
    )} 
  