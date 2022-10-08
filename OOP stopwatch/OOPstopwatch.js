let log = console.log
////// DON'T DELETE

let alphabet = "zyxwvutsrqponmlkjihgfedcba"
let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"



function switcher(strng) {
    let switchedMsg = ''
    for (i = 0; i < strng.length; i++) {
        if (alphabet.indexOf(strng[i]) !== -1) {
            switchedMsg += ALPHABET[alphabet.indexOf(strng[i])]
        } else if (ALPHABET.indexOf(strng[i]) !== -1) {
            switchedMsg += alphabet[ALPHABET.indexOf(strng[i])]
        }else{
            switchedMsg+= strng[i]
        }
    }
    return switchedMsg
}

log(switcher('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'))