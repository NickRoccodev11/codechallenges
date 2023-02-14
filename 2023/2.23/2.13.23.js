String.prototype.findParenMatch = function (pos) {
    //return if pos is not a paren
    if (this[pos] !== "(" &&
        this[pos] !== ")") {
        return -1
    }

    //keep track of levels of nested parens
    let levels = 0

    //two loops, one each for dealing with an open or closed paren as our argument 
    if (this[pos] === "(") {

        for (i = pos + 1; i < this.length; i++) {
            if (this[i] === "(") {
                //if we encounter another opener before our close, keep track of levels of nesting
                levels++;
            } else {
                if (levels === 0) {
                    // if we are on the level of the paren we're looking for, and it's a closer, return the index
                    return i
                }
                levels--;
            }
        }
    } else {
        // same as above but in reverse
        for (i = pos - 1; i >= 0; i--) {
            if (this[i] === ")") {
                levels++
            } else {
                if (levels === 0) {
                    return i
                }
                levels--;
            }
        }
    }
    return -1
};