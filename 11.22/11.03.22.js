

// // Incomplete:
// you need to correct for this answer:
// ({)}



/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let checked = []
    for(i=0;i<s.length; i++){
        log(s[i] + "i")
        for(j=0; j<s.length; j++)
        log(s[j] + "j")
       if( s[i]=== "("  && j[i] === ")" 
       && !checked.includes(i)
       && !checked.includes(j)){
           checked.push(i);
           checked.push(j);
       }else if ( s[i]=== "{"  && j[i] === "}" 
       && !checked.includes(i)
       && !checked.includes(j)){
           checked.push(i);
           checked.push(j);
       }else if  ( s[i]=== "["  && j[i] === "]" 
       && !checked.includes(i)
       && !checked.includes(j)){
           checked.push(i);
           checked.push(j);
       }
    }
    log(checked)
    return checked.length === s.length 
   };
   log(isValid("()"))