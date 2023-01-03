

// Write a function that checks if a given string (case insensitive)
//  is a palindrome.



function isPalindrome(x) {
    let revX = x.split("").reverse().join("")
    for (i = 0; i < x.length; i++) {
        if (x.toLowerCase()[i] !== revX.toLowerCase()[i]) {
            return false
        }
    }
    return true
}