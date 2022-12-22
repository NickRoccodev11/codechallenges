// Given two integer arrays nums1 and nums2, return an array of their intersection.
//  Each element in the result must appear as many times as it shows in both arrays and you may return 
//  the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]




/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let num1Map = {},
    num2Map= {},
    intersection = [];
    for (num of nums1){
        num1Map[num] = num1Map[num] + 1 || 1 
    }
    for (num of nums2){
        num2Map[num] = num2Map[num] + 1 || 1 
    }
    for(val in num1Map){
        if(num2Map[val]){
            if(num1Map[val] >  num2Map[val]){
               for(i=0; i < num2Map[val]; i++ ){
                intersection.push(val)
               }
            }else{
                for(i=0; i < num1Map[val]; i++ ){
                    intersection.push(val)
                   }
            }
        }
    }
   
    return intersection
};


