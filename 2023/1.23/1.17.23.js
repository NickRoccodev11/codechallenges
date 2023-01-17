

//UNFINISHED find the longest palidromic substring. current example is edge case,

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
    let longest = 0,
        count = 0,
        endpoint = null,
        substr = ''
    for (i = 0; i < s.length; i++) {
        for (j = s.length - 1; j >= i; j--) {
            if (s[i + count] !== s[j]) {
                log(`stage 1 PRE!! i:${i+ count}      j:${j}  letters: ${s[i+count]} ${s[j]}    count:${count}    endp:${endpoint}   substr:${substr} long" ${longest}   ${s} `)
                if (count > 0){
                    if(s[i] === s[j+1]){
                        j+=2;
                    }else{
                        j++;
                    }
                }
                count = 0;
                endpoint = null
                log(`stage 1postß!! i:${i + count}      j:${j}  letters: ${s[i + count]} ${s[j]}  count:${count}    endp:${endpoint}   substr:${substr} long" ${longest}   ${s} `)
            } else if (s[i + count] === s[j] && i !== j) {
                log(`stage 2 PRE!! i:${i+ count}      j:${j}  letters: ${s[i+count]} ${s[j]}    count:${count}    endp:${endpoint}   substr:${substr} long" ${longest}   ${s} `)

                count++

                endpoint === null ? endpoint = j + 1 : false
                log(`stage 2 POST!! i:${i+ count}      j:${j}  letters: ${s[i+count]} ${s[j]}    count:${count}    endp:${endpoint}   substr:${substr} long" ${longest}   ${s} `)
            } else {

                count++;
                endpoint === null ? endpoint = j + 1 : false

                log(`stage 3 PRE!! i:${i + count}      j:${j}   letters: ${s[i + count]} ${s[j]}   count:${count}    endp:${endpoint}   substr:${substr} long" ${longest}   ${s} `)
                if (count > longest) {
                    longest = count;
                    count = 0;
                    substr = s.slice(i, endpoint)
                    endpoint = null
                    log(`stage 3 POST!! i:${i}      j:${j}  letters: ${s[i]} ${s[j]}    count:${count}    endp:${endpoint}   substr:${substr} long" ${longest}  ${s}`)
                } else {
                    count = 0
                    endpoint = null
                }
            }
        }
    }
    return substr
}
log(longestPalindrome("xaabacxcabaaxcabaax"))// "bab" /  "aba"


//   You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.



/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
    let largest = 0,
    sizeMap = {};
    for (i = 0; i < height.length; i++) {
        for (j = 0; j < height.length; j++) {
            let compare = `${Math.min(i, j)}x${Math.max(i, j)}`
            if (i === j || sizeMap[compare]) {
                continue;
            } else if (Math.min(height[i], height[j]) * Math.abs(i - j) > largest) {
                largest = Math.min(height[i], height[j]) * Math.abs(i - j)
                let name = `${Math.min(i, j)}x${Math.max(i, j)}`
                sizeMap[name] = Math.min(height[i], height[j]) * Math.abs(i - j)
            } else {
                let name = `${Math.min(i, j)}x${Math.max(i, j)}`
                sizeMap[name] = Math.min(height[i], height[j]) * Math.abs(i - j)
            }
        }
    }
log(sizeMap)
return largest
};


log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))



