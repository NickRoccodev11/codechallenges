// given a string consisting of only letters and spaces, return the length of the last word


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ");
    let fArr = arr.filter((e)=> e.length > 0
    )
    return fArr[fArr.length-1].length
};