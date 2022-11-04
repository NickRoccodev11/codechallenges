//In this kata, your task will be to replace sad emoticons with funny ones.

// The emoticons, will be represented from:

// Eyes: marked as :, ; or =
// Nose (optional): marked as - or ~
// Mouth: marked as ( or [
// " =( " becomes " =) "

function smile(text) {
    let textArr = text.split('')
    for (i = 0; i < textArr.length; i++) {
        if (textArr[i] === ";" ||
            textArr[i] === ":" ||
            textArr[i] === "=") {
            if (textArr[i + 1] === "~" ||
                textArr[i + 1] === "-") {
                if (textArr[i + 2] === "[") {
                    textArr[i + 2] = "]"
                } else if (textArr[i + 2] === "(") {
                    textArr[i + 2] = ")"
                }
            } else if (textArr[i + 1] === "(") {
                textArr[i + 1] = ")"
            } else if (textArr[i + 1] === "[") {
                textArr[i + 1] = "]"
            }
        }
    }
    return textArr.join('')
}