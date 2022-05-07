// Complete the function which converts a binary number (given as a string) to a decimal number.





function binToDec(bin) {
    let binArr = bin.toString().split("")
    let numArr = binArr.map(el => parseInt(el))
    let val = numArr.reduce((acc, curr) => {
        return acc * 2 + curr
    })
    return val
}

//REFACTORED
function binToDec(bin) {
    return bin.toString().split("").map(el => parseInt(el)).reduce((acc, curr) => acc * 2 + curr)
}