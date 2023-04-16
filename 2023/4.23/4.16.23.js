//  sum an array of values, but disregard all duplicates



const sumNoDuplicates = (numList) => {
    let newA = [];
    numList.forEach((e, i, a) => {
        if (a.indexOf(e) === a.lastIndexOf(e)) {
            newA.push(e)
        }
    })
    return newA.reduce((a, c) => a + c, 0)
}