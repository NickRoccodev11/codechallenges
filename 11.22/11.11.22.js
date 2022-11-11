// spoonerism = " hair lip" => "lair hip"


function spoonerize(words) {
    let spoon = [],
       wordsArr = words.split(" ");
   
   spoon.push(wordsArr[1].slice(0,1) + wordsArr[0].slice(1));
   spoon.push(wordsArr[0].slice(0,1) + wordsArr[1].slice(1));
   
   return spoon.join(" ")
 }