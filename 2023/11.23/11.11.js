// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.



/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n<=0) return false;
    if(n===1)return true;
    let counter = 1
    let answer= Math.pow(3,counter)
    while(n>=answer){
        if(answer === n){
            return true
        }
        counter++
        answer= Math.pow(3,counter)
    }
    return false;
};