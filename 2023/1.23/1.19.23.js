// here is a func that has a local cache of products (n*m)
function memoizedClosure(m) {
    let cache = {}

    return (n) => {
        if (cache[n]) {
            return `cache[${n}] retrieved: ${cache[n]} `
        } else {
            cache[n] = n * m
            return `answer has been stored in cache as ${cache[n]} `
        }
    }
}
// to use the closure aspect of this func, and to assign the number we are multiplying by:
times10 = memoizedClosure(10)
times5 = memoizedClosure(5)

times10(2) //==> 20
times5(2)  //==> 10


// memoized version of fibonacci function
function fibonacciMemo(n) {
    let cache = { 0: 0, 1: 1, 2: 1 };
    return function inner(n) {
       if(n===0) return 0;
       
        if (cache[n]) {
            return cache[n]
        } else {
            let fib = inner(n - 1) + inner(n - 2);
            cache[n] = fib
            return fib
        }
    }
}
const fibonnaci = fibonacciMemo()