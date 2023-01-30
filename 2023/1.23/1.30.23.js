
//format an array of numbers to be a phone number string "(xxx) xxx-xxxx"

function createPhoneNumber(numbers){
    let first = [],
        second = [],
        third = []
    for(i=0; i<numbers.length; i++){
      if(i<3){
        first.push(numbers[i])
      }else if(i>=3 && i < 6 ){
        second.push(numbers[i])
      }else{
        third.push(numbers[i])
      }
    }
    return ["(",...first,")", " ", ...second, "-", ...third].join('')
  }