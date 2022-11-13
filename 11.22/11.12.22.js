// Given a sorted array of distinct integers and a target value, return the index
//  if the target is found. If not, return the index where it would be if
//  it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let lo = 0,
        hi = nums.length,
        mid;
    do {
        mid = Math.floor(lo + (hi - lo) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            hi = mid
        } else {
            lo = mid + 1
        }
    } while (hi > lo)
    return nums[mid] < target ? mid + 1 : mid
};


log(searchInsert([1, 3, 5, 6], 5)) // 2
log(searchInsert([1, 3, 5, 6], 2)) // 1
log(searchInsert([1, 3, 5, 6], 4)) // 2
log(searchInsert([1, 3, 5, 6, 7, 8, 9, 10, 15, 17, 18, 20], 16)) // 9
log(searchInsert([1, 3, 5, 6, 9, 12], 7)) // 4
log(searchInsert([1, 3, 5, 6], 7)) // 4

// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)




function solution(start, finish) {
    let jumps = 0;
    while (start < finish) {
        if (finish - start >= 3) {
            start += 3;
            jumps++;
        } else if (finish - start === 2) {
            jumps += 2;
            return jumps;
        } else {
            jumps++;
            return jumps;
        }
    }
    return jumps;
}