
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.





function findShort(s){
    let sArr = s.split (" "),
        shortest = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    
    for (i=0; i<sArr.length; i++){
      if (sArr[i].length < shortest.length){
        shortest = sArr[i]
      }
    }
    return shortest.length
  }