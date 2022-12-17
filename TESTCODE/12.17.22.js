// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let num1Map = {},
    intersection = [];
    for (num of nums1){
        if(!num1Map[num]){
            num1Map[num] = num  
        }
    }
    for (i=0; i < nums2.length; i++ ){
        if(num1Map[nums2[i]] && 
        !intersection.includes(nums2[i])){
            intersection.push(nums2[i])
        }
    }
    if(nums1.includes(0) && nums2.includes(0)){
        intersection.push(0)
    }
    return intersection
};