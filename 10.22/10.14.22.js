
//algo course. find the longest word in a string REDUCE METHOD
let phrase = "The rain in Spain falls mainly swimmingly on the plain"

function longest(str) {
    return str.split(" ").reduce((acc, cur) => {
        if (cur.length > acc.length) {
            return cur
        } else {
            return acc
        }
    }, "")
}
// log(longest(phrase))


// SORT METHOD

function longest2(str){
    return str.split(" ").sort((wordA,wordB)=> {
        return wordB.length - wordA.length
    })[0]
}

log(longest2(phrase))


/// replace a given word in a sentence with another given word

let phrase2 = "Buffalo girls won't you come out Tonight and dance by the light of the moon"
let phrase3 = "Buffalo girls won't you come out tonight and dance by the light of the moon"

function replaceWord(str, word, replacement) {

    let strArr = str.split(" ")
    let firstLetter = strArr[strArr.indexOf(word)][0]
    if (firstLetter === firstLetter.toUpperCase()) {
        let capitalized;
        capitalized = replacement[0].toUpperCase() + replacement.slice(1)
        return str.replace(word, capitalized)
    } else {
        return str.replace(word, replacement)
    }
}

log(replaceWord(phrase2, "Tonight", "tomorrow"))
log(replaceWord(phrase3, "tonight", "tomorrow"))