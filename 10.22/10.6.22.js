// huntober string challenge day one 

let numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let charArr = ["O", "I", "Z", "E", "h", "S", "G", "L", "B", "q"]

function decoder(strng) {
    let decoded = "",
        arrIndex = 0;
    for (i = 0; i < strng.length; i++) {
        if (numArr.indexOf(strng[i]) !== -1) {
            arrIndex = numArr.indexOf(strng[i])
            decoded += charArr[arrIndex]
        } else if (charArr.indexOf(strng[i]) !== -1) {
            arrIndex = charArr.indexOf(strng[i])
            decoded += numArr[arrIndex]
        } else {
            decoded += strng[i]
        }
    }
    return decoded
}


log(decoder("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))