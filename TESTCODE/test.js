let log = console.log
/////////////////////////////////////////////////////////////////////////


var isFascinating = function (n) {
    let stringVer = n.toString();
    log(stringVer)
    let concatted;
    for (i = 2; i < 4; i++) {
        concatted = i * n;
        log(concatted)
        stringVer += concatted;
        log(stringVer)
    }
    if (stringVer.length !== 9 &&
        stringVer.indexOf("0") !== -1) {
        return false
    }
    log(stringVer.indexOf("0"))
    for (i = 0; i < stringVer.length; i++) {
        if (stringVer.indexOf(stringVer[i]) !== stringVer.lastIndexOf(stringVer[i])) {
            return false
        }
    }
    return true
};


log(isFascinating(267))