// I will give you an integer. Give me back a shape that is 
// as long and wide as the integer. 
// The integer will be a whole number between 1 and 50.

function generateShape(integer) {
    let answer = "";
    let oneLine = "";

    for (i = 0; i < integer; i++) {
        oneLine += "+"
    }

    oneLine += "\n";

    for (i = 0; i < integer; i++) {
        answer += oneLine
    }

    return answer.slice(0, answer.length - 1)
}