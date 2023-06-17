// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

//  MY PLAN:

// save num as a string
// traverse the string by steps of k
// with each step, reassign a current variable which acts as divisor
//test it against num
// if it passes, increment a "K-beauty" variable
// return kbeauty

// var divisorSubstrings = function (num, k) {
//     let sNum = num.toString();
//     let current
//     let kBeauty = 0
//     for (i = 0; i < sNum.length; i++) {
//       curr = Number(sNum.slice(i, i + k))
//       if (num % curr === 0 && curr !== 0) {
//         kBeauty++
//       }
//     }
//     return kBeauty
//   };
  
//   console.log(divisorSubstrings(430043, 2))
//   console.log(divisorSubstrings(240,2))
  
  //Day 2: 122 of 183 passed WE GOT BUGS: num 30003 k= 3 (output 3, expected 1)
  var divisorSubstrings = function (num, k) {
    let sNum = num.toString();
    let kBeauty = 0;
    
    for (let i = 0; i <= sNum.length - k; i++) {
      const curr = Number(sNum.slice(i, i + k));
    
      if (num % curr === 0) {
        kBeauty++;
      }
    }
    
    return kBeauty;
  };

  //FINAL ANSWER!