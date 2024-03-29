// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

// Notes
// Number passed is always Positive.
// Return the result as String
// Input >> Output Examples
// strong_num(1) ==> return "STRONG!!!!"
// Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

// strong_num(123) ==> return "Not Strong !!"
// Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .



function strong(n) {
    let numArray = n.toString().split("").map(el => parseInt(el)),
     total = 0,
     factorial = 1;
    for (i = 0; i < numArray.length; i++) {
      for (j = numArray[i]; j > 0; j--) {
        factorial *= j
      }
      total += factorial
      factorial = 1
    }
    return total === n ? "STRONG!!!!" : "Not Strong !!";
  }