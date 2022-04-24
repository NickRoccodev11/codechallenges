// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length, but they may be empty ( zero length ).



function sandwich(s1, s2) {
    let longer = s1 > s2 ? s1 : s2,
        shorter = s1 < s2 ? s1 : s2;
    return shorter.concat(longer, shorter)
}
// our program will take in a string and clean out all numeric characters, 
// and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


function numRemover(str) {
    let splitstring = str.split("")
    log(splitstring)
    let noNums = []
    for (let i in str) {
        if (str[i] != Number(str[i]) || str[i] === " ") {
            noNums.push(str[i])
        }

    }
    return noNums.join("")
}
