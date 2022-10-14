
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