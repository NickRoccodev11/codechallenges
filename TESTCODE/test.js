let log = console.log
/////////////////////////////////////////////////////////////////////////


function neutralise(s1, s2) {
    let final = ""
    for (i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            final = final.concat("0")
            log(final)
        } else {
            final = final.concat(s1[i])
            log(final)
        }
    }
    return final;
}