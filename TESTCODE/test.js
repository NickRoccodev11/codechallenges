const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode
// Parameters - clarify all possibilities for params. think of edge cases. 
//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 
//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:
//1 Break your algorithm/function into individual operations
//2 Calculate the Big O of each operation
//3 Add up the Big O of each operation together
//4 Remove the constants
//5 Find the highest order term — this will be what we consider the Big O of our algorithm/function
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// iterate over num, checking for equality with the next digit ahead
//if i===i+1 then check if i+1 === i+2
//if all three match,...
// first check if theyre "999" you can stop if they are
//  otherwise create a variable that contains them as a number
//push the number var to a possibles array
//run Math.max or sort the array, whichever works 

var largestGoodInteger = function (num) {
  let possibles = [];
  let current;

  for (i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      current = num[i] + num[i] + num[i]
      if (current === "999") {
        return "999"
      } else {
        possibles.push(Number(current))
        current = ""
      }
    }
  }

  if(possibles.length === 0){
return ""
  }else if(Math.max(...possibles) === 0){
    return "000"
  }else{
    return Math.max(...possibles).toString()
  }
};

console.log(largestGoodInteger("2300019"))
console.log(largestGoodInteger("42352338"))
console.log(largestGoodInteger("6777133339"))