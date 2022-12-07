// Given a string of characters as input, write a
//  function that returns it with the characters reversed. 
//  No Reverse Method (well brute force it first, but then no reverse method)! 

const reverseMethod = s => s.split('').reverse().join('')

const reverseS = s => {
    let sArr = s.split(''),
        reversed = "";
    for (letter of s) {
        reversed += sArr.pop()
    }
    return reversed
}

//Important: make sure to reference the original string
//  in your loop termination expression

// const reverseS = s => {
//     let sArr = s.split(''),
//         reversed = "";
//     for (i=0; i<sArr.length; i++) { <==== !!! this will end early
//         reversed += sArr.pop()
//     }
//     return reversed
// }


// NOTE: using forEach behaves differently because the array is one less each time it returns
// you only end up with Half the word!
//even using the reference to the array in the argument doesn't prevent this behavior

// const reverseS = s => {
//     let sArr = s.split(''),
//         reversed = "";
//     sArr.forEach((char,i,a)=> reversed += a.pop())
//     return reversed
// }

// "gooses" => "ses"



log(reverseS("gooses"))
log(reverseS("ollyollyoxenfree"))
log(reverseS("abba"))