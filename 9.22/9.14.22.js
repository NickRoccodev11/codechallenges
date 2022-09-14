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
