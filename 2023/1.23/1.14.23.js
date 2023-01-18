

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 




/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    let newStr = "",
    strArr = [];

    for(i=0; i < s.length; i += k ){
        strArr.push(s.slice(i,i+k))
    }

    for(i=0; i < strArr.length; i += 2 ){
        if(strArr.length - i < 2){
            newStr += strArr[i].split("").reverse().join("")
        }else{
              newStr += strArr[i].split("").reverse().join("")
              newStr += strArr[i+1]

        }
    }
return newStr

};