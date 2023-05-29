
//reversing a number- should work for negatives also

function reverseNumber(n) {

    let en = n.toString()
    en = en.split('').reverse().join('')
    if (n < 0) {
        return parseInt(en) - parseInt(en) - parseInt(en)

    } else {
        return parseInt(en)
    }
}
