
// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"



function remove(string) {

    let finalString = []
    let arr = string.split(" ")

    for (i = 0; i < arr.length; i++) {
        if (!arr[i].includes("!")) {
            finalString.push(arr[i])
        } else {
            if (arr[i].indexOf("!") !== arr[i].lastIndexOf("!")) {
                finalString.push(arr[i])
            }
        }
    }
    return finalString.join(" ");
}