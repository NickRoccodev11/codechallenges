
// Sort the given array of strings in alphabetical order, case insensitive. For example:

const { Form } = require("react-router-dom");

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]




function sortMe(names) {
    names.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return names
  }
  


// the pendulum! given an Array, return the lowest value in the center, 
// with increasing values alternating From right and then left sides of center
// example: [5,3,2,4,1]  => [5,3,1,2,4]


//NOT WORKING
// TO FIX: try using an object with right and left properties, than returning a new array



  function pendulum(values) {
    let pivot = Math.floor((values.length - 1) / 2)
    let sortedArr = values.sort().slice();
    let right = true;
    log(pivot)
    log(sortedArr)
    log(values.length)
   let counter = 1
    for (i = 0; i < values.length; i++) {
      if (right) {
        sortedArr[ pivot + counter] = sortedArr[counter - 1]
      } else {
        sortedArr[pivot - counter] = sortedArr[counter + 1]
      };
     counter++
      if (right) {
        right = false
      } else if (!right) {
        right = true
      }
    }
  return values
  }
  
  log(pendulum([1, 5, 6, 3]))
  