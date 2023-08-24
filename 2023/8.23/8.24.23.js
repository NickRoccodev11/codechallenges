// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

const stringy = (size) => {
    let str = "1"
    for(i=0; i < size-1; i++){
      if(str[str.length-1] === "1"){
        str += "0"
        }else{
          str += "1"
        }
    }
    return str
  }
  console.log(stringy(10))