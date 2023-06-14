// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

// It is a substring of num with length 3.
// It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

// A substring is a contiguous sequence of characters within a string.
// There may be leading zeroes in num or a good integer.



// iterate over num, checking for equality with the next digit ahead
//if i===i+1 then check if i+1 === i+2
//if all three match,...
// first check if theyre "999" you can stop if they are
//  otherwise create a variable that contains them as a number
//push the number var to a possibles array
//run Math.max or sort the array, whichever works 

var largestGoodInteger = function (num) {
    let possibles = [];
    let current;
  
    for (i = 0; i < num.length; i++) {
      if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
        current = num[i] + num[i] + num[i]
        if (current === "999") {
          return "999"
        } else {
          possibles.push(Number(current))
          current = ""
        }
      }
    }
  
    if(possibles.length === 0){
  return ""
    }else if(Math.max(...possibles) === 0){
      return "000"
    }else{
      return Math.max(...possibles).toString()
    }
  };
  
  console.log(largestGoodInteger("2300019"))
  console.log(largestGoodInteger("42352338"))
  console.log(largestGoodInteger("6777133339"))