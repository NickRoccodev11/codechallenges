
// fizzBuzz! This time with 3 and 2




const fizzBuzz = n => {
    for (i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log("Fizzbuzz!")
        } else if (i % 3 === 0) {
            console.log("Buzz!")
        } else if (i % 2 === 0) {
            console.log("Fizz!")
        } else {
            console.log(i)
        }
    }
}

log(fizzBuzz(100))
