
// reverse a String, remove all non-letters in the process


const reverseLetter = (str) => {
    let response = ''
    for (i=str.length-1; i >= 0; i-- ){
      if(str[i] !== str[i].toUpperCase() ||
        str[i] !== str[i].toLowerCase()){
        response += str[i]
      }
    }
    return response
  }


