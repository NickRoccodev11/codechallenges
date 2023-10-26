// Summary
// In this kata, you have to make a function named uglify_word (uglifyWord in Java and Javascript). It accepts a string parameter.

// What does the uglify_word do?
// It checks the char in the given string from the front with an iteration, in the iteration it does these steps:

// There is a flag and it will be started from 1.
// Check the current char in the iteration index.
// If it is an alphabet character [a-zA-Z] and the flag value is equal to 1, then change this character to upper case.
// If it is an alphabet character [a-zA-Z] and the flag value is equal to 0, then change this character to lower case.
// Otherwise, if it is not an alphabet character, then set the flag value to 1.
// If the current char is an alphabet character, do a boolean not operation to the flag.
// After the iteration has done, return the fixed string that might have been changed in such iteration.

function uglifyWord(s) {
   let a = s.split('')
    let flag = true
    for (i = 0; i < a.length; i++) {
        if (a[i].toUpperCase() !== a[i] || a[i].toLowerCase() !== a[i]) {
            if (flag) {
                a[i] = a[i].toUpperCase()
                flag = !flag
            } else {
                a[i] = a[i].toLowerCase()
                flag = !flag
            }
        } else {
            flag = true
        }
    }
    return a.join('')
}