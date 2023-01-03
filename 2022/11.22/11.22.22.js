// convert a Roman Numeral string into it's number value

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let total = 0;
    let values = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I:1
 };
 for(i=0;i<s.length;i++){
     if(values[s[i]+s[i+1]]){
         total += values[s[i]+s[i+1]]
    i++
     }else{
         total += values[s[i]]
     }
 }
 return total
};