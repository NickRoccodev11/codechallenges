// Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:

// [a,a,a,a,b,b] and [c,c,c,d,c,d]
// Both arrays have four of one item and two of another, so balance should return true.

// #Have fun!

function balance(arr1, arr2) {

    if (arr1.length !== arr2.length) {
      return false
    }
  
    let obj1 = {}, obj2 = {}
  
    for (i = 0; i < arr1.length; i++) {
      if (!obj1[arr1[i]]) {
        obj1[arr1[i]] = 1
      } else if (obj1[arr1[i]]) {
        obj1[arr1[i]] += 1
      }
      if (!obj2[arr2[i]]) {
        obj2[arr2[i]] = 1
      } else if (obj2[arr2[i]]) {
        obj2[arr2[i]] += 1
      }
    }
  
    let valArr1 = Object.values(obj1).sort(),
      valArr2 = Object.values(obj2).sort();
  
    return JSON.stringify(valArr1) === JSON.stringify(valArr2)
  }