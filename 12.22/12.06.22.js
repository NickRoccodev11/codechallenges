// Count all the occurring characters in a string. If you have a string like aba, 
// then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


const charFrequency = s => {
    let sMap = {};
    for (char of s) {
        if (!sMap[char]) {
            sMap[char] = 1
        } else {
            sMap[char]++
        }
    }
    return sMap
}

log(charFrequency("aBba"))
log(charFrequency(""))
log(charFrequency("zzzzbabj"))
