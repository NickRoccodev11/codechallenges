


function catchSignChange(arr) {
    if (arr.length <= 1) {
        return 0
    }
    let pos = arr[0] >= 0
    let signChange = 0
    for (i = 1; i <= arr.length; i++) {
        if (arr[i] < 0 && pos === true ||
            arr[i] >= 0 && pos === false) {
            signChange++;
            pos = !pos
        }
    }
    return signChange
}