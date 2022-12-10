// DESCRIPTION:
// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"
// Notes
// The order of letters in the result is not important.
// The letters "zz" transform into "a".
// There will only be lowercase letters.
// If you like this kata, check out another one: Last Survivor Ep.3






function lastSurvivors(str) {
    let strArr = str.split('').sort(),
        run = true;

    while (run) {
        for (i = 0; i < strArr.length; i++) {
            if (strArr[i] === strArr[i + 1]) {
                if (strArr[i] === "z") {
                    front = strArr.slice(0, i)
                    end = strArr.slice(i + 2)
                    strArr = front.concat(end)
                    strArr.push("a")
                } else {
                    newLetter = strArr[i].charCodeAt(0) + 1
                    front = strArr.slice(0, i)
                    end = strArr.slice(i + 2)
                    strArr = front.concat(end)
                    strArr.push(String.fromCharCode(newLetter))
                }
            }
        }

        let compare = new Set(strArr);
        if (compare.size === strArr.length) {
            run = false
        } else {
            strArr.sort()
        }
    }
    return strArr.join('')
}