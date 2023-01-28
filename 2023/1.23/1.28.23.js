//turn a string into an array that contains the length of each
//  word in the string separated by a space 
// "apple ban"  =>   ["apple 5", "ban 3"]


function addLength(str) {
    let strArr= str.split(" "),
      answer= [];
      strArr.forEach((el)=> answer.push(`${el} ${el.length}`))
      return answer
    }