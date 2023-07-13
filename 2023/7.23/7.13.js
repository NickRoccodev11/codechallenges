//Closures


function outer (){
    let x = 0;
    function inner(num){
        x+= num
        return x
    }
    return inner
}

let myInnerFunc = outer()
log(myInnerFunc(5)) // 5
log(myInnerFunc(10)) // 15
// 15?? it's because we created a CLOSURE, and our inner function maintains access to it's outer function's environment evenafter the outer function has been executed