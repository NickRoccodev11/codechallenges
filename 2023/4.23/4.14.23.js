// valid smiley faces : 
// eyes: ";", ":"
// Nose(optional): "-", "~"
// mouth: ")", "D"

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let totalSmileys = 0

    for (i = 0; i < arr.length; i++) {
        if (arr[i][0] === ":" || arr[i][0] === ";") {
            if (arr[i][1] === "-" || arr[i][1] === "~") {
                if (arr[i][2] === ")" || arr[i][2] === "D") {
                    totalSmileys++
                }
            } else if (arr[i][1] === ")" || arr[i][1] === "D") {
                totalSmileys++
            }
        }
    }
    return totalSmileys;
}