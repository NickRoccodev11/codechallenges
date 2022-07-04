// DESCRIPTION:
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'









function sortMyString(S) {
    let even = "",
        odd = "";
    for (i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
            even += S[i]
        } else {
            odd += S[i]
        }
    }
    return `${even} ${odd}`
}