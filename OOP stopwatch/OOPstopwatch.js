let log = console.log

/////////////////////////////////////////////////////////////////////////////////////////////////

myArray = ['abc', 'xyz', 1, 2, 'Hey!']


function moveLeft(arr, el) {
    let placeHolder,
        startingIndex = arr.indexOf(arr[arr.indexOf(el)]),
        finishIndex = arr.indexOf(arr[arr.indexOf(el) - 1]);     

    if ( startingIndex > 0) {
        placeHolder = arr[finishIndex];
        arr[finishIndex] = arr[startingIndex];
        arr[startingIndex] = placeHolder
    }
    return arr
}

function moveRight(arr, el) {
    let placeHolder,
        startingIndex = arr.indexOf(arr[arr.indexOf(el)]),
        finishIndex = arr.indexOf(arr[arr.indexOf(el) + 1]);     

    if ( startingIndex > 0) {
        placeHolder = arr[finishIndex];
        arr[finishIndex] = arr[startingIndex];
        arr[startingIndex] = placeHolder
    }
    return arr
}


log(moveRight(myArray, 2))