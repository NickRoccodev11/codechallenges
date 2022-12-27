// Your task is to return an output string that translates an input string s by
//  replacing each character in s with a number representing the number of times that character
//   occurs in s and separating each number with the sep character(s).





function freqSeq(str, sep) {
    let map = {};
    for (char of str) {
        map[char] = map[char] + 1 || 1
    }
    log(map)
    let statement = ""

    for (i = 0; i < str.length; i++) {
        if (i === str.length - 1) {
            statement += map[str[i]]
        } else {
            statement += map[str[i]].toString() + sep
        }
    }

    return statement
}
