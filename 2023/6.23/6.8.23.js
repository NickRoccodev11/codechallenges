//DAY 2 "DIGITSUM"

//determine length of string and if its greater than k
//push sliced chunks into new array
// convert to numbers, sum them, and then join it all back to a string to check for length


var digitSum = function (s, k) {
    if (s.length <= k) {
      return s
    } else {
      let arr = []
      for (i = 0; i < s.length; i += k) {
        arr.push(s.slice(i, i + k))
      }
      let sum = 0
      let sumArr = []
      for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
          sum += Number(arr[i][j])
        }
        sumArr.push(sum)
        sum = 0;
      }
      s = sumArr.join("")
    }
    return digitSum(s,k)
  };
  
  console.log(digitSum("11111222223", 3))