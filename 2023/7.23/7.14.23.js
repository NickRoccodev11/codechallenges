// call, apply, bind:

let myMethod = function(a,b,c){
    this.num += a+b+c;
    return this.num
   }
   
   let obj1 = {
       num: 4
   }
   
   let obj2 = {
       num: 0
   }
   console.log(
   myMethod.call(obj1, 1,2,3), //10
   myMethod.call(obj2, 1,2,3)  // 6
   )
   
   // we have a global function that we can give a specific context to 'this' with call()
   let arr = [1,2,3]
   console.log(
       myMethod.apply(obj1, arr), //16
       myMethod.apply(obj2, arr),   // 12
       )
       // apply is the same, but accepts an array for argument
   
        boundMethod = myMethod.bind(obj1)
   
        console.log(boundMethod(1,1,1)) // 19
        // bind creates a new function with a specified context (this value) and, if desired, prepends arguments to the function call. 