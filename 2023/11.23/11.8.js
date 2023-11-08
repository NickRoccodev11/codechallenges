//generate pascal's triangle given a number of rows to create
var generate = function (numRows) {
    let outer = Array(numRows)
    for (i = 0; i < outer.length; i++) {
        outer[i] = Array(i + 1)
    }
    var counter = 0
    for (i = 0; i < outer.length; i++) {
        for (j = 0; j < outer[i].length; j++) {
            if (j === 0) {
                outer[i][j] = 1
                continue;
            } else if (j === outer[i].length - 1) {
                outer[i][j] = 1
                continue;
            }
            outer[i][j] = outer[i - 1][counter] + outer[i - 1][counter + 1]
            counter++;
        }
        counter = 0
    }
    return outer
};