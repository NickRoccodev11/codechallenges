// Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:

// the first two digits of 1176 form a prime.
// the first two digits of the square 1382976 also form a prime.
// the last two digits of 1176 and 1382976 are the same.
// Given two numbers representing a range (a, b), 
// how many numbers satisfy this property within that range? (a <= n < b)


function solve(a, b) {
    let satisfied = 0;
    let primes = ["11", "13", "17", "19", "23", "29", "31", "37",
        "41", "43", "47", "53", "59", "61", "67", "71", "73",
        "79", "83", "89", "97"]
    for (i = a; i <= b; i++) {
        let num = i.toString();
        let sqr = (i * i).toString();
        if (num.slice(num.length - 2) === sqr.slice(sqr.length - 2)) {
            if (primes.includes(num.slice(0, 2)) &&
                primes.includes(sqr.slice(0, 2))) {
                satisfied++
            }
        }
    }
    return satisfied;
}



// TASK 2
// An isogram is a word that has no repeating letters, consecutive 
// or non-consecutive. Implement a function that determines whether 
// a string that contains only letters is an isogram. Assume 
// the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

const isIsogram = str => new Set(str.toLowerCase()).size === str.length

// Task 3

// You are given an input (n) which represents the amount of lines you are given.
// Your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.
function maxBisectors(n) {
    let bisec = 0,
        increment = 0;

    for (i = 1; i <= n; i++) {
        bisec += increment;
        if (i === 1 ||
            i % 2 !== 0) {
            increment++
        }
    }
    return bisec;
}

// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

const max = s => {
    let charMap = {}
    for (char of s) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    let most = 0,
        letter = null;
    for (char in charMap) {
        if (charMap[char] > most) {
            most = charMap[char]
            letter = char
        }
    }
    return letter
}

log(max("hello, world"))

// given an array of numbers, return an array of a running total of each number 
// summed with every number to it's left

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let acc = 0;
    return nums.map((n, i, a) => {
        acc += n;
        n = acc;
        return n;
    })
};

//  You are given an integer array nums and two integers limit and goal. The array nums has an interesting property that abs(nums[i]) <= limit.

//  Return the minimum number of elements you need to add to make the sum of the array equal to goal. The array must maintain its property that abs(nums[i]) <= limit.

//  Note that abs(x) equals x if x >= 0, and -x otherwise.


// this solution is correct, but times out with larger numbers
/**
* @param {number[]} nums
* @param {number} limit
* @param {number} goal
* @return {number}
*/
var minElements = function (nums, limit, goal) {
    let curr = nums.reduce((a, c) => a + c, 0);
    let min = 0;
    while (curr !== goal) {
        if (curr < goal) {
            if (goal - curr < limit) {
                min++
                return min
            } else {
                curr += limit;
                min++
            }
        } else {
            if (curr - goal < limit) {
                min++
                return min
            } else {
                curr -= limit;
                min++
            }
        }
    }
    return min
};

// Beats 87% of answers for time!!!!

var minElements = function (nums, limit, goal) {
    let curr = nums.reduce((a, c) => a + c, 0);
    let min = 0;
    let diff = 0;
    if ((curr <= 0 && goal <= 0) ||
        (curr >= 0 && goal >= 0)) {
        diff = Math.abs(goal - curr);
    } else {
        diff = Math.abs(goal) + Math.abs(curr)
    }
    return Math.ceil(diff / limit)
};




// Given an integer array nums, return true if any value appears at least twice in
//  the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const unique1 = nums => {
    for (i = 0; i < nums.length; i++) {
        if (i !== nums.lastIndexOf(nums[i])) {
            return true
        }
    }
    return false
}

//alt


const unique2 = nums => new Set(nums.size) !== nums.length

// third


const unique = nums => {
    let numMap = {}

    for (number of nums) {
        if (numMap[number]) {
            return true
        } else {
            numMap[number] = true
        }
    }
    return false

}


log(unique([1, 2, 3, 1]), true)
log(unique([1, 2, 3, 4]), false)
log(unique([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)