
// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complet


function chain(input, fs) {

    for (i = 0; i < fs.length; i++) {
        input = fs[i](input)
    }
    return input
}