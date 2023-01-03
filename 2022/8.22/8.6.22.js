
// The goal of this exercise is to convert a string to a new string where each
//  character in the new string is "(" if that character appears only once in the
//   original string, or ")" if that character appears more than once in the original
//    string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// NOTE : THIS doesn't work because referencing "str" inside of map refers to str as it was 
// originally passed in, not as it exists currently in the return chain

const parenNo = str => {
    return str.toLowerCase().split('')
        .map(char => str.indexOf(char) === str.lastIndexOf(char) ? "(" : ")").join('')
}

// instead save it to a variable to reference it as a lowercase

const parenClose = str => {
    let arr = str.toLowerCase().split('')
    return arr.map(char => arr.indexOf(char) === arr.lastIndexOf(char) ? "(" : ")").join('')
}

//UPDATE: YOU CAN USE MAP's THIRD PARAMETER : THE ARRAY REFERENCE !

const paren3 = str => str.toLowerCase().split('')
    .map((char, idx, arr) => arr.indexOf(char) === arr.lastIndexOf(char) ? "(" : ")")
    .join('')


// NOW WITH A HASH MAP

const paren = str => {
    let strMap = {};
    for (char of str) {
        if (!strMap[char.toLowerCase()]) {
            strMap[char.toLowerCase()] = 1
        } else {
            strMap[char.toLowerCase()]++
        }
    }
    return str.split('').map(char => strMap[char.toLowerCase()] > 1 ? ")" : "(").join('')
}

