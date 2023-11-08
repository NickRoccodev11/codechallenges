let log = console.log
/////////////////////////////////////////////////////////////////////////

// for every row from 1 to n,the row length is +1 the previous row rowN should have N length
//the first and last entries are always one, because they only add with a single digit, 1
//we can set the row length before filling it,and make sure that each end is 1
//if we were on row 5, we would fill it by saying:
// 0 is 1
// 1 is the previous array[0] plus array[1]
//2 is array[1] plus arr[2]
//3 is arr[2] plus arr[3]
//4 is arr[3] plus arr [4]\
// 5 is last - 1
// it seems we need to preset the outer array length, and then go in and preset the inner array lengths

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

log(generate(5))