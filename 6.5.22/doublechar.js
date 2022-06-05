
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.





function doubleChar(str) {
    let newStr = "";
    str.split("").forEach(letter => {
        newStr += letter + letter;
    })
    return newStr;
}