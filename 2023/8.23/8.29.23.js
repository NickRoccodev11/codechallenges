// 've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: 
//The number I'm afraid of depends on which day of the week it is... This is a concrete
// description of my mental illness: (etc) return a boolean of whether im scared


var AmIAfraid = function (day, num) {
    if (day === "Monday") {
        if (num === 12) {
            return true
        }
    } else if (day === "Tuesday") {
        if (num > 95) {
            return true
        }
    } else if (day === "Wednesday") {
        if (num === 34) {
            return true
        }
    } else if (day === "Thursday") {
        if (num === 0) {
            return true
        }
    } else if (day === "Friday") {
        if (num % 2 === 0) {
            return true
        }

    } else if (day === "Saturday") {
        if (num === 56) {
            return true
        }
    } else if (day === "Sunday") {
        if (num === 666 || num === -666) {
            return true
        }
    }
    return false
}