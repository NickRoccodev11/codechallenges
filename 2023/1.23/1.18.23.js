// iven two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.
 



/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
    let count = 0,
     fullRotation = s.length + 1,
    compare = s.split('');
    while (count < fullRotation){
        count++;
        compare.push(compare.shift())
        if(compare.join('') === goal){
            return true
        }
    }
    return false
};

// standup challenge: factorials with recursion

const factorial = n => n === 1 ? n : n * factorial(n-1) 


log(factorial(10))