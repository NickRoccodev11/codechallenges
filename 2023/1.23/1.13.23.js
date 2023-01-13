// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
    let degree = 0,
        numMap= {},
        dNums= [];
        for (number of nums){
            numMap[number] = numMap[number] + 1 || 1
             numMap[number] > degree ? degree = numMap[number] : null
        }
        for( number in numMap){
            if (numMap[number] === degree){
                dNums.push(parseInt(number))
            }
        }
        let ssa = 50001
    for(i=0;i<dNums.length;i++){
        if(nums.lastIndexOf(dNums[i]) - nums.indexOf(dNums[i]) < ssa){
            ssa = nums.lastIndexOf(dNums[i]) - nums.indexOf(dNums[i])
        }
    }
    return ssa + 1
};