let log = console.log
/////////////////////////////////////////////////////////////////////////

function compare(s1, s2) {
    let val1 = 0
    let val2 = 0
    let upper = ""

    for (i = 0; i < s1.length; i++) {
        if (s1[i].toUpperCase() === s1[i].toLowerCase()) {
            val1 = 0
            break;
        } else {
            upper = s1[i].toUpperCase();
            log(upper)
            val1 += upper.charCodeAt(0)
            log(val1)
        }
    }
    for (i = 0; i < s2.length; i++) {
        if (s2[i].toUpperCase() === s2[i].toLowerCase()) {
            val2 = 0
            break;
        } else {
            upper = s2[i].toUpperCase();
            log(upper)
            val2 += upper.charCodeAt(0)
            log(val2)
        }
       
    }
    return val1 === val2
}

log(compare("AD", "BC"))