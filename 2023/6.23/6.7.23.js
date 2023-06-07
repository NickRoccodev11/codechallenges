// You are given a string s consisting of digits and an integer k.

// A round can be completed if the length of s is greater than k. In one round, do the following:

// Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.
// Replace each group of s with a string representing the sum of all its digits. For example, "346" is replaced with "13" because 3 + 4 + 6 = 13.
// Merge consecutive groups together to form a new string. If the length of the string is greater than k, repeat from step 1.
// Return s after all rounds have been completed.

// // "11111222223" k=3

// 111 112 222 23
// 3   4   6   5
// 3465
// 346 5
// 135 <== answer



//determine length of string and if its greater than k
//


var digitSum = function(s, k) {
    let arr =[]
      for(i=0; i<s.length; i+=k){
        arr.push(s.slice(i,i+k))
      }
      console.log(arr)
  };
  
  console.log(digitSum("11111222223", 3))

  //DAY 1 : I've figured out how to slice our string into k-sized chunks.. tomorrow I sum them and join them back together