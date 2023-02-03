// convert an object into an Array. the array should be sorted aphabetically by key.

  
function convertHashToArray(hash) {
    let arr = [],
        keys = Object.keys(hash).sort()
    for (i = 0; i < keys.length; i++) {
        arr.push([keys[i]]);
        arr[i].push(hash[keys[i]])
    }
    return arr
}