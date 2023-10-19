// You are given a 0-indexed string num of length n consisting of digits.

// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.


//hash map: iterate thru string
//key:number val: frequency
// 1210
// 1:2
// 2:1
// 0;1
//iterate thru num, making sure that the element at i 
//coincides with our map

var digitCount = function (num) {
    let digiMap = {}
    for (digit of num) {
        if (!digiMap[digit]) {
            digiMap[digit] = 1
        } else {
            digiMap[digit]++
        }
    }
    for (i = 0; i < num.length; i++) {
        let index = i.toString()
        if (!digiMap[index]) {
            if (num[i] != "0") {
                return false
            }
        } else {
            if (digiMap[index].toString() != num[i]) {
                return false
            }
        }
    }
    return true
};

console.log(digitCount("1210"))