//create a "strongPasswordChecker"


/**
 * @param {string} password
 * @return {boolean}
 */

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