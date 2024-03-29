// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).





function factorial(n) {
  if (n < 0 || n > 12) {
    throw RangeError;
  }
  let total = n;
  for (i = n - 1; i > 0; i--) {
    total *= i
  }
  return total === 0 ? 1 : total
}

// NEXT

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  cc = cc.split("");
  let limit = cc.length - 4;
  for (i = cc.length - 1; i >= 0; i--) {
    if (i < limit) {
      cc[i] = "#"
    }
  }
  return cc.join("")
}