
// Given two arrays of strings a1 and a2 return a sorted array r 
// in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]





function newList(a1, a2) {
    let sortedArr = []
    a1.filter(element => {
        for (i = 0; i < a2.length; i++) {
            if (a2[i].includes(element)) {
                sortedArr.push(element)
            }
        }
    })
    return Array.from([...new Set(sortedArr.sort())])
}