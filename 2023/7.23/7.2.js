// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.

//create a hash map
// iterate over array, key:num val:frequency
//return Math.max(...object.values(map))


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