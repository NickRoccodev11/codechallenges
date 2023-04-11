
// Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. 
// Repeated characters are to be ignored and non-alphebetic characters as well.

function charToAscii(string) {
    if (string.length === 0) {
        return null
    }
    let hash = {}
    for (char of string) {
        if (!hash[char] && char.toUpperCase() !== char.toLowerCase()) {
            hash[char] =  string.charCodeAt(string.indexOf(char))
        }
    }
    return hash
}