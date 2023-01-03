
// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"



function spongeMeme(sentence) {
    let memeSentence= [];
    let s = sentence.split("")
    for (i=0; i<sentence.length; i++){
      i%2===0 ? memeSentence.push(s[i].toUpperCase()) : memeSentence.push(s[i].toLowerCase())
    }
    return memeSentence.join("")
  }