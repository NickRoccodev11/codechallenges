// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

const stringer = str => {
    return str.split('').map(char => {
        if (char.toLowerCase() === char) {
            return char.toUpperCase()

        } else if (char.toUpperCase() === char) {
            return char.toLowerCase()

        }
    }).join('').split(" ").reverse().join(" ")


}