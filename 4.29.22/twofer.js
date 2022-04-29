
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the 
// second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.





function countPositivesSumNegatives(input) {
    let positive = 0, 
        negative = 0
    if (input===null){
      return []
    }
    input.forEach(num=>{
      if(num > 0){
        positive += 1
      }else if(num < 0){
        negative += num
      }
    }) 
    if (positive===0 && negative===0){
      return []
    }else{
    return [positive,negative]
    }
  }



//   We need a simple function that determines if a plural is needed or not.
//    It should take a number, and return true if a plural should be used with 
//    that number or false if not. This would be useful when printing out a string such as 
//    5 minutes, 14 apples, or 1 sun.

//   You only need to worry about english grammar rules for this kata, where anything
//    that isn't singular (one of something), it is plural (not one of something).
  
//   All values will be positive integers or floats, or zero.






  function plural(n) {
    return n === 1 ? false : true
   }