
// log(isSub("aaaaaa", "bbaaaa"), "false")
// log(isSub("acb", "ahbgdc"), "false")

//
// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.





function stockList(listOfArt, listOfCat) {
    if (listOfArt.length === 0 || listOfCat.length === 0) {
        return ""
    }
    let inStock = {};
    for (i = 0; i < listOfArt.length; i++) {
        if (!inStock[listOfArt[i][0]]) {
            if (listOfCat.includes(listOfArt[i][0])) {
                inStock[listOfArt[i][0]] = parseInt(listOfArt[i].slice(listOfArt[i].indexOf(" ")))
            }
        } else {
            inStock[listOfArt[i][0]] += parseInt(listOfArt[i].slice(listOfArt[i].indexOf(" ")))
        }
    }
    for (i = 0; i < listOfCat.length; i++) {
        if (!inStock[listOfCat[i]]) {
            inStock[listOfCat[i]] = 0
        }
    }
    let codeArr = Object.keys(inStock)
    let stockArr = Object.values(inStock)
    let resArr = []
    for (i = 0; i < listOfCat.length; i++) {

        resArr.push(`(${listOfCat[i]} : ${stockArr[codeArr.indexOf(listOfCat[i])]})`)
    }
    return resArr.join(" - ")
}
// log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
//     ["A", "B", "C", "D"]))
//"(A : 0) - (B : 1290) - (C : 515) - (D : 600)"

// ANOTHER TAKE
//   FROM CODEWARS

function stockList(listOfArt, listOfCat) {
    if (!listOfArt.length || !listOfCat.length) return ''
    return listOfCat.map(w => {
        const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
        return `(${w} : ${s})`
    }).join(' - ')
}
