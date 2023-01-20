//this pattern is called an accumulator. 
// the answer given it's inputs is "abracadabra!"

function joinElements(array, joinString) {
    function recurse(idx, result) {
        result += array[idx];
        if (idx === array.length - 1) {
            return result
        } else {
            return recurse(idx + 1, result + joinString)
        }
    }
    return recurse(0, '')
}

log(joinElements(["abr", "c", "d", "br", "!"], "a"))


// accumulator pattern refers to the continual updating of a total, or "accumulator"
// the above code could still be considered "accumulator pattern" while being solved
//  iteratively

function iterativeAccumulator(array, joinString) {
    let result = ''
    for (i = 0; i < array.length; i++) {
        if (i === 0) {
            result = array[0]
        } else if (i !== array.length - 1) {
            result += joinString + array[i]
        } else {
            return result + joinString + array[i]
        }
    }

}

log(iterativeAccumulator(["b", "b", "y", "g", "!"], "a"))