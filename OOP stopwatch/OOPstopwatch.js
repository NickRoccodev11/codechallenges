let log = console.log

/////////////////////////////////////////////////////////////////////////////////////////////////

myArray = ['abc', 'xyz', 1, 2, 'Hey!']


function moveLeft(arr, el) {
    let placeHolder,
        moveFrom = arr[arr.indexOf(el)],
        moveTo = arr[arr.indexOf(el) - 1],
        startingIndex = arr.indexOf(moveFrom),
        finishIndex = arr.indexOf(moveTo);     

    if ( startingIndex > 0) {
        placeHolder = arr[finishIndex];
        arr[finishIndex] = arr[startingIndex];
        arr[startingIndex] = placeHolder
    }
    return arr
}


log(moveLeft(myArray, "Hey!"))