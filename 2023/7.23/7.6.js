
// Task
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

function flickSwitch(arr) {
    let bool = true
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        if(arr[i]==="flick"){
            bool = !bool
        }
        newArr.push(bool)
    }
    return newArr
}