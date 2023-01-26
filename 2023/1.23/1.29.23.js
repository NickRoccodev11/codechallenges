// check for Palindrome, only consider alphanumeric characters, no spaces. only printable ASCII chars as input 

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let alphaNums = s.split('').filter((el)=> {
        if(el.toUpperCase() !== el.toLowerCase()){
            return el
        }else if(parseInt(el)){
            return el
        }else if(parseInt(el)===0){
            return el
        }
    } ) 

    return  alphaNums.join('').toLowerCase()=== alphaNums.reverse().join('').toLowerCase()

};