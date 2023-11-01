
// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018

// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend
//start a while loop that counts up from giiven year
//at each new year, stringify and iterate do a check of indexOf vs lastIndexof
// if you hit an index that matches another index, breAK;
// if we make it to end of loop, and no dups, return parseInt(year)


function nextHappyYear(year) {
    let curYear = year;
    let strYear = '';
    while (true) {
        curYear++;
        strYear = curYear.toString();
        for (i = 0; i < strYear.length; i++) {
            if (strYear.indexOf(strYear[i]) !== strYear.lastIndexOf(strYear[i])) {
                break;
            } else if (i === strYear.length - 1) {
                return curYear
            }
        }
    }
}