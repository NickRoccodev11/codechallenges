let log = console.log
/////////////////////////////////////////////////////////////////////////

function mostFrequentItemCount(collection) {
    if (collection.length === 0) {
        return 0
    }
    let map = {}
    for (num of collection) {
        if (!map[num]) {
            map[num] = 1
        } else {
            map[num]++
        }
    }
    console.log(map)
    return Math.max(...Object.values(map))
}

console.log(mostFrequentItemCount([3, -1, -1]))
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))