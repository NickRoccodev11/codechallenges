// DESCRIPTION:
// There were and still are many problem in CW about palindrome numbers 
// and palindrome strings.
//  We suposse that you know which kind of numbers they are.
//  If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have 
// to create the function next_pal()(nextPal Javascript) that will outpu
//  the smallest palindrome number higher than val.

function nextPal(val) {
    val++;
    while (val !== parseInt(val.toString().split('').reverse().join(''))) {
        val++
    }
    return val
}

log(nextPal(11), 22)
log(nextPal(188), 191)
log(nextPal(191), 202)
log(nextPal(2541), 2552)

