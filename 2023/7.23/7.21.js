// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

//create two variables to store val
//create variable for uppered chars
//iterate, check if its a letter(toUppercase !== toLowerCase)
//if its not, set val to zero
//if it is, set uppered char
// val1 += uppered.charCodeAt(0)
//do the same for the second string
function compare(s1, s2) {
    let val1 = 0
    let val2 = 0
    let upper = ""

    if (s1) {
        for (i = 0; i < s1.length; i++) {
            if (s1[i].toUpperCase() === s1[i].toLowerCase()) {
                val1 = 0
                break;
            } else {
                upper = s1[i].toUpperCase();
                val1 += upper.charCodeAt(0)
            }
        }
    }
    if (s2) {
        for (i = 0; i < s2.length; i++) {
            if (s2[i].toUpperCase() === s2[i].toLowerCase()) {
                val2 = 0
                break;
            } else {
                upper = s2[i].toUpperCase();
                val2 += upper.charCodeAt(0)
            }
        }
    }
    return val1 === val2
}