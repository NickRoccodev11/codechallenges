// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. 
// Assume that argument is an integer.


//original
function getSumOfDigits(integer) {
    var sum = null;
    var digits =  Math.floor(integer).toString();
    for(var ix = 1; ix < digits.length; ix = sum + 1) {
      sum =+ digits[ix + 1]);
    }
    return sum;
  }


//answer
function getSumOfDigits(integer) {
    var sum = 0;
    var digits = integer.toString();
    for (var i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i])
    }
    return sum;
}