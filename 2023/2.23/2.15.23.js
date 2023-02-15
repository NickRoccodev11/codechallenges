// check if a string of parens is valid

function validParentheses(parenStr) {
    let level = 0
    for (var i = 0; i < parenStr.length; i++){
      if(parenStr[i] === "("){
        level++
      }else if (parenStr[i] === ")"){
        level--;
        if(level< 0){
          return false
        }
      }
    }
    return level === 0 
    }