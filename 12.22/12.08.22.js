// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 


const max = s => {
    let charMap = {};
    for (char of s) {
        if (!charMap[char]) {
            charMap[char] = 1
        } else {
            charMap[char]++
        }
    }
    let max = Math.max(...Object.values(charMap))
    return Object.keys(charMap).find(key => charMap[key] === max)
}
log(max("hello world"), "l")

// without//
const max2 = s => {
    let max = 0,
        current = 0,
        letter = '';
    for (i = 0; i < s.length; i++) {
        for (j = 0; j < s.length; j++) {
            if (s[i] === s[j] && i !== j) {
                current++
            }
        }
        if (current > max) {
            max = current;
            letter = s[i]
        }
        current = 0
    }
    return letter
}

log(max2("hello world"), "l")