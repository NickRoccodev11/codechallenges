let log = console.log
/////////////////////////////////////////////////////////////////////////
/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
    let sArr = s.split("")
    let final = sArr.filter((e, i, a) => a.indexOf(e) === a.lastIndexOf(e))
    return final.length
};

log(minimizedStringLength("hello"))