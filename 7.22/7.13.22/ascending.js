// DESCRIPTION:
// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Decends one at a time until reaching the minimum
// repeat until the string is the appropriate length
// Examples:

//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
// Notes:

// length will always be non-negative
// negative numbers can appear for minimum and maximum values
// hyphens/dashes ("-") for negative numbers do count towards the length
// the resulting string must be truncated to the exact length provided
// return an empty string if maximum < minimum or length == 0
// minimum and maximum can equal one another and result in a single number repeated for the length of the string

// function ascendDescend(length, minimum, maximum) {
//     let numString = minimum.toString(),
//         counter = minimum,
//         ascending = true
//     if (length === 0 || minimum > maximum) {
//         return ""
//     }
//     if (minimum === maximum) {
//         for (i = 1; i < length; i++) {
//             numString += minimum.toString()
//         }
//         return numString
//     }
//     while (numString.length < length) {
//         if (ascending && counter < maximum) {
//             counter += 1
//             numString += counter.toString()
//         } else if (ascending && counter === maximum) {
//             ascending = false
//             counter -= 1
//             numString += counter.toString()
//         } else if (!ascending && counter > minimum) {
//             counter -= 1
//             numString += counter.toString()
//         } else if (!ascending && counter == minimum) {
//             ascending = true;
//             counter += 1;
//             numString += counter.toString()
//         }
//     }
//     while (numString.length > length) {
//         numString = numString.split("")
//         numString.pop()
//         numString = numString.join("")
//     }
//     return numString
// }

function solution(input, markers) {
    let newComment = ""
    let counter = 0
    for(i=0;i<input;i++ ){
      if(!markers.some(input[i])){
        newComment.push(input[i])
      }else if (markers.some(input[i])){
        while( input[i]!== "\n"){
              i++
              }
        
      }
    }
    return newComment
  };

  log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))