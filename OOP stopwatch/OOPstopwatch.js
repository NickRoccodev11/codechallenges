let log = console.log
////// DON'T DELETE


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
