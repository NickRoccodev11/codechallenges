// what numbers are common to all subarrays of this 2d array?


// very slow answer

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection1 = function (nums) {
    if (nums.length === 1) {
        return nums[0].sort((a, b) => a - b)
    }
    let commons = []
    nums[0].forEach(el => nums[1].includes(el) ? commons.push(el) : null)
    for (i = 2; i < nums.length; i++) {
        for (j = 0; j < commons.length; j++) {
            if (!nums[i].includes(commons[j])) {
                commons = commons.slice(0, j).concat(commons.slice(j + 1))
                j--;
            }
        }
    }
    return commons.sort((a, b) => a - b)
};

// REASSIGNMENT VS RE-DECLARATION INSIDE OF FUNCTIONS



let x = 1

function reassign(){
    x = 2
}

reassign();
console.log(x) // 2 ... REASSIGNMENT CHANGES GLOBAL VALUE

let y = 1

function reassign2(){
    let y  = 2
}

reassign2();
console.log(y) // 1 ... REDECLARATION DOES NOT CHANGE GLOBAL VALUE



// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

// Return the total number of seconds that Ashe is poisoned.

 

// Example 1:

// Input: timeSeries = [1,4], duration = 2
// Output: 4
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
// Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.
// Example 2:

// Input: timeSeries = [1,2], duration = 2
// Output: 3
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 2 however, Teemo attacks again and resets the poison timer. 
// Ashe is poisoned for seconds 2 and 3.
// Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.
 

// Constraints:

// 1 <= timeSeries.length <= 104
// 0 <= timeSeries[i], duration <= 107
// timeSeries is sorted in non-decreasing order.
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let total = 0; 
 for(i=1; i< timeSeries.length; i++){
     let distance = timeSeries[i] - timeSeries[i-1]
     if(distance >= duration){
         total += duration
     }else{
         total += distance
     }
 }
 return total + duration
 };
 
 log(findPoisonedDuration([1,3,7,9,10], 5 ))
 
 // [1,3,7,9,10] => 14
    
 //d=5
 // 2  4 2 1 5 
 
 
 
 // if distance < duration, => total += dur-dis
 // if duration <= distance, => total +=  duration
 