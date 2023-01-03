
// Write a function that given, an array arr, returns an array containing at each index i
//  the amount of numbers that are smaller than 
// arr[i] to the right.


function smaller(nums) {
    let tally = 0;
    let answer = []
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                tally++
            }
        }
        answer.push(tally);
        tally = 0
    }
    return answer
}