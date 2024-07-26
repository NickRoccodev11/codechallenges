function firstNonRepeatingCharacter(string) {
  const charMap = {};
  for(char of string){
    charMap[char] = charMap[char] ? ++charMap[char] : 1
  }
  for(let i = 0 ; i < string.length ; i++){
    if(charMap[string[i]] === 1){
     return i    
    }
  }
  return -1;
}

