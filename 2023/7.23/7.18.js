// Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

// #Examples:

// *Example 1*
// SubstringTest("Something","Fun"); //Returns false

// *Example 2*
// SubstringTest("Something","Home"); //Returns true
// In the above example, example 2 returns true because both of the inputs contain the substring "me". (soMEthing and hoME)
// In example 1, the method will return false because something and fun contain no common substrings. (We do not count the 'n' as a substring in this Kata because it is only 1 character long)
function SubstringTest(str1, str2) {
    for (i = 0; i < str1.length; i++) {
        for (j = 0; j < str2.length; j++) {
            if (str1[i].toLowerCase() === str2[j].toLowerCase()) {
                if (j !== str2.length - 1 && i !== str1.length - 1 &&
                    str1[i + 1].toLowerCase() === str2[j + 1].toLowerCase()) {
                    return true
                }

            }
            log(str1[i], str2[j])
        }
    }
    return false
}
console.log(SubstringTest("aaaaaaaaaaaaaaaaaaaaaamom", "mombbbbbbbbbbb"))