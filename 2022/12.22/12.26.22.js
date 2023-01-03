
// Given crowd, an array of strings of equal length, representing a crowded place, return an array with two integers representing the coordinates [y, x] where Waldo can be found ([0, 0] is top-left, y being the row and x being the column ).

// Examples
// We've spotted Waldo a couple of times in the past. Below is what we found out. Note that he's been in much more crowded places lately.

// #1 Waldo at the beach
// "             "          Air
// "         w   "           Air with a bird
// "   w         "           Air with a bird
// "~~~~~~~~~~~~~"           Sea
// ".~..~~.~~~..~"           Waves on beach
// "...P......P.."           Beach with some people
// "......P..P..."           Beach with some people
// "..PW........."           Beach with Waldo and presumably a friend next to him

// Unredacted report: Waldo can be found at [7, 3], wearing his usual outfit







function findWaldo(crowd) {

    let map = {},
        waldo = '';
    for (i = 0; i < crowd.length; i++) {
        for (occurence of crowd[i]) {
            map[occurence] = map[occurence] + 1 || 1
        }
    }
    log(map)
    for (person in map) {
        if (map[person] === 1) {
            waldo = person
        }
        log(waldo)
    }

    for (i = 0; i < crowd.length; i++) {
        for (j = 0; j < crowd[i].length; j++) {
            if (crowd[i][j] === waldo) {
                return [i, j]
            }
        }
    }
    return [0, 0]
}