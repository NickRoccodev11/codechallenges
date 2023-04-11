
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.


// first attempt: works, but times out with large numbers
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let stair = 0,
    stairLength = 1,
    coinsLeft = n,
    totalStairs = 0;
while (coinsLeft > 0 ){
    coinsLeft--;
    stair++;
    if(stair === stairLength){
        stair = 0;
        stairLength++;
        totalStairs++; 
    }
}
return totalStairs
};

