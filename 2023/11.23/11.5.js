// generator function that yields an infinite times table for any number

function* generator(a) {
    let b = 0
    
    while(true){
      b++
      yield `${a} x ${b} = ${a*b}`
    }
    
  }