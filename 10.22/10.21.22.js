// RETURN THE LONGEST COMMON PREFIX OF AN ARRAY OF STRINGS

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    strs.sort((a,b)=> a.length - b.length)
    let prefix = strs[0].split('')
    for(i=1; i<strs.length; i++){
        for(j=0; j<strs[i].length; j++){
            if(strs[i][j] !== prefix[j] && j===0){
                return ""
            }else if (strs[i][j] !== prefix[j]){
                prefix = prefix.slice(0,j)
            }
        }
    }
    return prefix.join('')
};