let log = console.log
/////////////////////////////////////////////////////////////////////////
// string
//rtsng

//poiinter
//ponter


//limit
//mlt

//strings are immutable, consider doing this as an array that is joined before returning
//iterate through string, if str[i] === "i" arr.reverse(). else arr.pop(str[i])
//return arr.join("")
var finalString2 = function (s) {
    let strArr = [];

    for (i = 0; i < s.length; i++) {
        if (s[i] === "i") {
            strArr.reverse();
        } else {
            strArr.push(s[i]);
        }
    }
    return strArr.join('');
};

var finalString = s => s.split('').sort((a,b)=> a=== "i" ? )