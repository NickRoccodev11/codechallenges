
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

function longest2(str) {
    return str.split(" ").sort((wordA, wordB) => {
        return wordB.length - wordA.length
    })[0]
}

log(longest2(phrase))


/// replace a given word in a sentence with another given word

let phrase2 = "Buffalo gals won't you come out tonight and dance by the light of the moon"
let phrase3 = "Buffalo gals won't you come out tonight and dance by the light of the moon"

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

log(replaceWord(phrase2, "Buffalo", "bison"))
log(replaceWord(phrase3, "tonight", "tomorrow"))


// check fo anagram


// function anagram(str1, str2) {
//     return str1.split('').sort().join('') === str2.split('').sort().join('')
//     }

function anagram(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let obj1 = {}
    let obj2 = {}
    for (char of str1) {
        if (!obj1[char]) {
            obj1[char] = 1
        } else {
            obj1[char]++
        }
    }
    for (char of str2) {
        if (!obj2[char]) {
            obj2[char] = 1
        } else {
            obj2[char]++
        }
    }
    arr1 = Object.keys(obj1)
    arr2 = Object.keys(obj2)
    vArr1 = Object.values(obj1)
    vArr2 = Object.values(obj2)
    let longestLength
    if (arr1.length > arr2.length) {
        longestLength = arr1.length
    } else {
        longestLength = arr2.length
    }
    for (i = 0; i < longestLength; i++) {
        if (arr1[i].toUpperCase() !== arr1[i]) {
            if (vArr1[i] !== vArr2[i]) {
                return false
            }
        }
    }
    return true
}

log(anagram("star", "rats"), "true")
log(anagram("start", "rats"), "false")
log(anagram("bob", "boo"), "false")
log(anagram("pooh", "hoop"), "true")

// pig latinizer


function igLatinPay(str) {
    let iterations = str.length
    let vowels = ["a", "e", "i", "o", "u"]
    let consonants = ""
    for (i = 0; i < iterations; i++) {
        if (vowels.includes(str[i]) && i === 0) {
            return str + "way"
        } else if (vowels.includes(str[i]) && i !== 0) {
            break;
        } else {
            consonants += str[i]
        }
    }
    return str.slice(consonants.length) + consonants + "ay"
}




log(igLatinPay("stove"), "ovestay")
log(igLatinPay("oven"), "ovenway")
log(igLatinPay("hover"), "overhay")
log(igLatinPay("street"), "eetstray")


