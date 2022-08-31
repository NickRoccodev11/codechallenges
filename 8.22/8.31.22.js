// Remove an exclamation mark from the end of a string. For a beginner kata, you
//  can assume that the input data is always a string, no need to verify it.



function remove(string) {
    string = string.split("")
    string[string.length - 1] === "!" ? string.pop() : false
    return string.join("");
}