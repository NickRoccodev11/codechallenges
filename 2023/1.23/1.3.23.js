// what numbers are common to all subarrays of this 2d array?


// very slow answer

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection1 = function (nums) {
    if (nums.length === 1) {
        return nums[0].sort((a, b) => a - b)
    }
    let commons = []
    nums[0].forEach(el => nums[1].includes(el) ? commons.push(el) : null)
    for (i = 2; i < nums.length; i++) {
        for (j = 0; j < commons.length; j++) {
            if (!nums[i].includes(commons[j])) {
                commons = commons.slice(0, j).concat(commons.slice(j + 1))
                j--;
            }
        }
    }
    return commons.sort((a, b) => a - b)
};

// REASSIGNMENT VS RE-DECLARATION INSIDE OF FUNCTIONS



let x = 1

function reassign(){
    x = 2
}

reassign();
console.log(x) // 2 ... REASSIGNMENT CHANGES GLOBAL VALUE

let y = 1

function reassign2(){
    let y  = 2
}

reassign2();
console.log(y) // 1 ... REDECLARATION DOES NOT CHANGE GLOBAL VALUE
