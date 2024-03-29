// ou are given two integer arrays nums1 and nums2, sorted in
//  non-decreasing order, and two integers m and n, representing 
//  the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in 
// non-decreasing order.

// The final sorted array should not be returned by the 
// function, but instead be stored inside the array nums1.
//  To accommodate this, nums1 has a length of m + n, 
//  where the first m elements denote the elements that should be merged,
//  and the last n elements are set to 0 and should be ignored. 
//  nums2 has a length of n.




/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let compare = nums1.slice(0, m).concat(nums2).sort((a, b) => a - b)
    for (i = 0; i < nums1.length; i++) {
        nums1[i] = compare[i]
    }
}

log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))


// Given a non-empty array of integers nums, every element appears twice except for one. 
// Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.



/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = (nums) => nums.filter((el,i,a)=> a.indexOf(el) === a.lastIndexOf(el) )[0]
