
// Fizzbuzz 1 indexed, to string



var fizzBuzz = function (n) {
    let answer = []
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            answer.push("Fizz")
        } else if (i % 5 === 0 && i % 3 !== 0) {
            answer.push("Buzz")
        } else if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz")
        } else {
            answer.push(i.toString())
        }
    }
    return answer
};


// vowel count

function vowelCount(strng) {
    const vowelArr = ["a", "e", "o", "i", "u"],
        toLower = strng.toLowerCase();
    let count = 0;

    for (i = 0; i < strng.length; i++) {
        if (vowelArr.includes(toLower[i])) {
            count++
        }
    }
    return count
}

// return character with highest frequwency in a string (two solutions)

function mostFrequent(string) {
    let charMap = {};
    let count = 0;
    for (i = 0; i < string.length; i++) {
        if (!charMap[string[i]]) {
            charMap[string[i]] = 1
        } else {
            charMap[string[i]] += 1
            count = charMap[string[i]]
        }
        if (charMap[string[i]] > count) {
            count = charMap[string[i]]
        }
    }
    let arr = Object.getOwnPropertyNames(charMap)

    for (i = 0; i < string.length; i++) {
        if (charMap[string[i]] === count) {
            return arr[i]
        }
    }
}

function mostFrequentAgain(string) {
    let charMap = {}
    let most = 0,
    charArr =[],
    valueArr = []

    for (char of string) {
        if (!charMap[char]) {
            charMap[char] = 1
        } else {
            charMap[char]++
        }
    }

    charArr = Object.keys(charMap)
    valueArr = Object.values(charMap)
    most = Math.max(...valueArr)
    return charArr[valueArr.indexOf(most)]

    // for (prop in charMap) {
    //     if (charMap[prop] > greatest) {
    //         greatest = charMap[prop];
    //         char = prop;
    //     }
    // }
    // return char
}

log(mostFrequentAgain("hellohh"))

function mostFrequent2(string) {
    let curCount = 0,
        finalCount = 0,
        answer = '';

    for (i = 0; i < string.length; i++) {
        curCount = 1
        for (j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j) {
                curCount += 1
            }
        }
        if (curCount > finalCount) {
            finalCount = curCount
            answer = string[i]
        }
        curCount = 0
    }
    
    return answer
}
// log(mostFrequent2("helloogggg"))