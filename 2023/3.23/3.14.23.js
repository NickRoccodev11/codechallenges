// return the opposite sign // 45 => -45 //   -97 => 97


function opposite(number) {
    if (number < 0){
      return Math.abs(number)
    }else{
      return number - number - number
    }
    }