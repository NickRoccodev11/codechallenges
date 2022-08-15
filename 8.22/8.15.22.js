// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.



var uniqueInOrder = function (iterable) {
    if (iterable.length === 0) {
        return []
    }
    this.finalArr = [iterable[0]]
    for (i = 0; i < iterable.length; i++) {
        if (finalArr[finalArr.length - 1] !== iterable[i]) {
            finalArr.push(iterable[i])
        }
    }
    return finalArr
}