// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

//declare final string
// loop over one string, compare both strings at cur index
// if(str1[i]!== str2[i]) push zero
//otherwise push str1[i]
//return final

function neutralise(s1, s2) {
    let final = ""
    for (i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            final.concat("0")
            log(final)
        } else {
            final.concat(s1[i])
            log(final)
        }
    }
    return final;
}