
//acronym creator... must be capitalized

function toAcronym(inp){
    let arr = inp.split(' '),
        letters = []
    for(i = 0; i< arr.length; i++){
      letters.push(arr[i][0].toUpperCase())
    }
    return letters.join('')
  }

  log(toAcronym("faint undulations comfort kangaroos"))