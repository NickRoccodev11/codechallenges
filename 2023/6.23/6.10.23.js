// You are given a string number representing a positive integer and a character digit.

// Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

// MY PLAN

// if the first instance has is succeeded by a larger number, remove the first.
// if you make it to the end and you have not removed any numbers, remove the last instance
// iterate through string looking for digit
//if you get a match, compare it to the next digit using parseInt() 
//if (digit is greater than nextnum) continue
// else if (digit is smaller than nextnum) slice string up until digit, 
// concatenate the rest after digit onto a new var
//return var
 


var removeDigit = function (number, digit) {
    let newNum = ""
    for (i = 0; i < number.length; i++) {
      if (number[i] === digit) {
        if (Number(number[i + 1]) > Number(digit)) {
          newNum = number.slice(0, number[i])
          newNum += number.slice(number[i + 1])
          return newNum
        }
      }
    }
    newNum = number.slice(0, number.lastIndexof(digit))
    newNum += number.slice(number.lastIndexof(digit + 1))
    return newNum
  };
  
  // DAY 2: THERE ARE SOME BUGS!! 