
// Complete the function that takes a non-negative integer n as input, 
// and returns a list of all the powers of 2
//  with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n) {
    let answer = [];
     for(i=0; i <= n; i++ ){
       answer.push(Math.pow(2,i))
     }
        return answer
   }
   

//    is Palindrome? return boolean of whether a string is a palindrome

function isPalindrome(word){
    let reversedString = word.split('').reverse().join('')
    return word === reversedString 
}
// EVEN SLICKER
const isPalindrome2 = word => word === word.split('').reverse().join('')