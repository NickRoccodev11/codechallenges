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

var strongPasswordCheckerII = function (password) {
  if (password.length < 8) {
    return false
  }
  let lowerCase = false;
  let upperCase = false;
  let oneDigit = false;
  let specialChar = false;
  let specialList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
  for (i = 0; i < password.length; i++) {
    if (i !== password.length - 1 && password[i] === password[i + 1]) {
      log("failed here on", i, password[i], password[i + 1])
      return false
    }
    if (password[i].toLowerCase() === password[i] && password[i].toUpperCase() !== password[i]) {
      lowerCase = true
    } else if (password[i].toLowerCase() !== password[i] && password[i].toUpperCase() === password[i]) {
      upperCase = true
    } else if (specialList.includes(password[i])) {
      specialChar = true
    } else if (!specialList.includes(password[i]) && password[i] === password[i].toUpperCase() && password[i] === password[i].toLowerCase()) {
      oneDigit = true
    }
  }
  if (lowerCase && upperCase && oneDigit && specialChar) {
    return true
  } else {
    return false
  }
};

console.log(strongPasswordCheckerII("IloveLe3tcode!"))