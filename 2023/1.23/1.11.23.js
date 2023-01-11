

console.log("ee")


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
    let numMap= {},
    total = 0;
    for (number of nums){
        numMap[number] = numMap[number]+1 || 1
    }

    for(i=0; i<nums.length; i++){
        
        if(numMap[nums[i]] + numMap[nums[i]-1] > total ){
         
            total = numMap[nums[i]] + numMap[nums[i]-1];

            console.log(`total: ${total}i: ${i}s`)
        }else if (numMap[nums[i]] + numMap[nums[i]+1] > total ){
            total = numMap[nums[i]] + numMap[nums[i]+1];
            console.log(`total: ${total} i: ${i}`)

        }
    }

    return total
};

console.log(findLHS(
  [51,61,48,80,10,60,74,39,67,79,72,87,48,33,71,55,65,-58,58,65,79,38,80,35,55,85,86,53,100,42,65,70,89,97,39,88,5,53,8,57,1,12,62,88,70,95,41,84,95,71,36,95,-43,98,57,88,37,84,6,61,52,79,13,9,24,53,83,9,12,26,99,81,29])) // 5
