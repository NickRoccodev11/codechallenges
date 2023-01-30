
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

  // currying function-- create a function that takes an array returns another function which takes a
//   number and returns an the array with each element multiplied by the number

const multiplyAll = (array) => (n)=> array.map(el=> el * n)