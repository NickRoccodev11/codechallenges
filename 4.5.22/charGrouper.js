
// Complete the solution so that it splits the string into
// pairs of two characters. If the string contains an odd number
//  of characters then it should replace the missing second character of the 
//  final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function charGrouper(str) {
    let grouped = []
    let optionalUnderscore = "_"
    if (str.length % 2 !== 0) {
        let evenstr = str.concat(optionalUnderscore)
        for (i = 0; i < evenstr.length; i += 2) {
            let group = evenstr[i].concat(evenstr[i + 1])
            grouped.push(group)
        }
       return grouped
    } else {
        for (i = 0; i < str.length; i += 2) {
            let group = str[i].concat(str[i + 1])
            grouped.push(group)
        }
        return grouped
    }
}