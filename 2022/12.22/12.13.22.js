//isomorphic strings
// egg add=> true       foo bar => false

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    let sMap = {}
    for (i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) {
            if (Object.values(sMap).includes(t[i])) {
                return false
            }
            sMap[s[i]] = t[i]
        } else {
            if (sMap[s[i]] !== t[i]) {
                return false
            }
        }
    }
    return true
};

log(isIsomorphic("paper", "title"))

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than
//  ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majority = a => {
    let numMap = {};
    for (num of a) {
        numMap[num] = numMap[num] + 1 || 1
        if (numMap[num] > Math.floor(a.length / 2)) {
            return num
        }
    }
}

log(majority([3, 3, 4]))
log(majority([2, 2, 1, 1, 1, 2, 2]))
