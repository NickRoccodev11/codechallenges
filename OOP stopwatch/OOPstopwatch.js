let log = console.log

/////////////////////////////////////////////////////////////////////////////////////////////////

let numArr = ["apple", "bite", "car", "dear", "elephant", "frog"]
// log(numArr.slice(0, 1))

let contain1 = [],
    contain2 = []

for (i = 0; i < numArr.length; i++) {
    if (i > 0) {
        contain1.push(numArr.slice(0, i).join(' '))
        contain1.push(numArr.slice(i).join(' '))
        contain2.push(contain1)
        log(`one:  ${contain1}`)
        contain1 = []
        log(contain2)
    }
}
